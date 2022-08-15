// something similar to this :) , but for matching objects
// https://codeburst.io/alternative-to-javascripts-switch-statement-with-a-functional-twist-3f572787ba1c

// usage:
// let a: number = match<string, number>('11')
//   .is('11', 11)
//   .is('12', 12)
//   .is('13', 13)
//   .otherwise(5)
// console.log('[match]', a)


const matched = <O>(x: O) => ({
  is: () => matched(x),
  otherwise: (): O => x,
})

type Match<O> = {
  is: (val: any, ret: O) => Match<O>
  otherwise: (ret: O) => O
}

export const match = <I, O>(input_value: I) => ({
  is: (value_to_compare: any, return_value: O): Match<O> =>
    value_to_compare == input_value
      ? (matched(return_value) as any)
      : (match(input_value) as any),
  otherwise: (return_value: O): O => return_value,
})