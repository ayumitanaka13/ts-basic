export default function primitiveSample() {
  const name = 'Ayumi'
  console.log('sample 1', typeof name, name)
  const age = 28
  console.log('sample 2', typeof age, age)
  const isSingle = true
  console.log('sample 3', typeof isSingle, isSingle)
  const isOver20: boolean = age >= 20
  console.log('sample 4', typeof isOver20, isOver20)
}
