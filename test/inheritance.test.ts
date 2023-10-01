describe('Inheritance', () => { 
    class Employee {
        name: string

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {}

    class Director extends Manager {}

    it('should support', () => {
        const employee = new Employee('Eko');
        console.log(employee.name);

        const manager = new Manager('Budi');
        console.log(manager.name);

        const director = new Director('Joko');
        console.log(director.name);
    })
 })