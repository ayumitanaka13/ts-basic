export default class World {
  message: string

  constructor(message: string) {
    this.message = message
  }

  public sayHello(element: HTMLElement | null): void {
    if (element) {
      element.innerText = this.message
    }
  }
}
