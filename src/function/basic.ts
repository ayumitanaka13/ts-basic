// void
export const logMessage = (message: string): void => {
  console.log('Function basic sample 1', message)
}

export function logMessage2(message: string): void {
  console.log('Function basic sample 2', message)
}

export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3', message)
}

export const logMessage4 = (message: string): void => console.log('Function basic sample 4', message)

// never
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// signature
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log('Function basic sample 6', message)
}

type FullLogMessage = { (message: string): void }
export const logMessage7: FullLogMessage = (message) => {
  console.log('Function basic sample 7', message)
}
