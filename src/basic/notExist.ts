export default function notExistSample() {
  const name = null
  console.log('sample 5', typeof name, name)
  if (name) {
    console.log(`I have ${name}`)
  } else {
    console.log(`I don't have name (${name})`)
  }

  const age = undefined
  console.log('sample 6', typeof age, age)
  if (age) {
    console.log(`I am ${age} yo`)
  } else {
    console.log(`I am ${age} yo`)
  }
}
