function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T)
{
    return class extends constructor {
        newProperty = 'New property';
        hello = "Over write"
    }
}

@classDecorator
class SuperClass {
  public newProperty: string = "Abc123";

  print() {
    console.log(this.hello); // It is allowed
  }
}

new SuperClass().print()