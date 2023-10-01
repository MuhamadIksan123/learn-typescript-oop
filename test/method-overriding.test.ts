describe('Method Overriding', () => { 
    class Employee {
        name: string;
        constructor(name:string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`)
        }
    }

    // class Manager extends Employee {
    //     sayHello(name: string): void {
    //          console.log(`Hello ${name}, my name is ${this.name}, I am Manager`);
    //     }
    // }

    class Manager extends Employee {
      sayHello(name: string): void {
        super.sayHello(name);
        console.log(`And, I am your Manager`);
      }
    }
    it('should support method overriding', () => {
        const employee = new Employee('Eko');
        employee.sayHello('Budi')

        const manager = new Manager('Dea');
        manager.sayHello('Budi');
    })
 })