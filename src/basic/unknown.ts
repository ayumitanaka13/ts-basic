export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('sample 9', typeof maybeNumber, maybeNumber)
  // number
  const isFoo = maybeNumber === 'foo'
  console.log('sample 10', typeof isFoo, isFoo)
  // boolean

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('sample 11', typeof sum, sum)
  }
}
