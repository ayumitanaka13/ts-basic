// option parameter
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in!')
    return false
  }
}

// default parameter
export const isUserSignedIn2 = (userId: string, userName = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters sample 4: User is not signed in!')
    return false
  }
}

// rest parameter
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((sum: number, product: number) => sum + product, 0)
}
