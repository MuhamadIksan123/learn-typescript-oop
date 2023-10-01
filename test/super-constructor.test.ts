describe('Super constructor', () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    departement: string;

    constructor(name: string, departement: string) {
      super(name);
      this.departement = departement;
    }
  }
  it('shoul support super constructor', () => {
    const employee = new Employee('Eko', 'Tech');
    console.log(employee.name);
    console.log(employee.departement);
  });
});
