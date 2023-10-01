describe('Abstract', () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;
    constructor(id: number) {
        this.id = id;
    }

    hello() {
      console.log('Hello World');
    }

    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    name: string;
    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it('Should support abstract', () => {
    const customer1 = new RegularCustomer(1, 'Eko');
    customer1.sayHello('Budi');
  });
});
