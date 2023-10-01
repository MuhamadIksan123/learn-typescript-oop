describe('Polymorphism', () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  // function sayHello(employee: Employee): void {
  //   console.log(`Hello ${employee.name}`);
  // }

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.log(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello Manager ${manager.name}`);
    } else {
      console.log(`Hello Employee ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello Manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.log(`Hello VP ${vp.name}`);
    } else {
      console.log(`Hello Employee ${employee.name}`);
    }
  }

  it('should support polymorhism', () => {
    let employee = new Employee('Eko');
    console.log(employee.name);

    employee = new Manager('Eko');
    console.log(employee.name);

    employee = new VicePresident('Eko');
    console.log(employee.name);
  });

  it('should support method polymorhism', () => {
    sayHello(new Employee('Eko'));
    sayHello(new Manager('Budi'));
    sayHello(new VicePresident('Joko'));
  });

  it('should support method polymorhism wrong', () => {
    sayHelloWrong(new Employee('Eko'));
    sayHelloWrong(new Manager('Budi'));
    sayHelloWrong(new VicePresident('Joko'));
  });
});
