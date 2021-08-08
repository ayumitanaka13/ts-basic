// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World')
// world.sayHello(root)

import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'
import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

logMessage('Hello world!')

isUserSignedIn('ABC', 'Ayumi')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
console.log(sumProductsPrice(100, 200, 300))
