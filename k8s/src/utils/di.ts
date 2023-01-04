import 'reflect-metadata'
import {injectable as libInjectable, inject as libInject, Container} from 'inversify'

export const injectable = libInjectable
export const inject = libInject

type Class = {new (...args: any[]): any}

export class Runner {
  container: Container
  names: string[] = []

  constructor() {
    this.container = new Container()
  }

  get<T extends Class>(_class: T): InstanceType<T> {
    return this.container.get<InstanceType<T>>(_class.name)
  }

  bind<T extends Class>(_class: T) {
    const name = _class.name
    if (this.names.includes(name))
      throw new Error(`[Dependency Injection] ${name} already exists in [${this.names}]`)
    return {
      to: (to_class: T) => {
        this.container.bind(name).to(to_class)
        this.names.push(name)
      },
    }
  }

  rebind<T extends Class>(_class: T) {
    const name = _class.name
    if (!this.names.includes(name))
      throw new Error(`[Dependency Injection] can't override ${name}, since it doesn't exist in [${this.names}]`)
    return {
      to: (to_class: T) => {
        this.container.rebind(name).to(to_class)
      },
    }
  }
}

@injectable()
export class Injectable {
  static with(o: Partial<InstanceType<typeof this>>): any {
    class NewClass extends this {}
    for (const [name, func] of Object.entries(o)) {
      // @ts-ignore
      NewClass.prototype[name] = func
    }
    return NewClass
  }
}

function injectable2<T extends Class>(constructor: T) {
  return class extends constructor {
    static with(o: Partial<InstanceType<any>>): any {
      class NewClass extends this {}
      for (const [name, func] of Object.entries(o)) {
        // @ts-ignore
        NewClass.prototype[name] = func
      }
      return NewClass
    }
  };
}