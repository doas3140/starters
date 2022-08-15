export namespace rs {
  type Ok<T> = {ok: true; val: T}
  type Err<E> = {ok: false; error: E}
  export type Result<T, E = Error> = Ok<T> | Err<E>
  export type ResultOkType<T, E = Error> = T extends Err<E> ? never : T
}
