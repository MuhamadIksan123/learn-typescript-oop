describe('Properties', () => { 
    class Customer {
        readonly id: number;
        name: string = "Guest";
        age?: number;
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name:string): void {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should can have properties', () => {
        const customer: Customer = new Customer(1, 'Jhon');
        customer.age = 20;

        console.log(customer.id);
        console.log(customer.name);
        console.log(customer.age);
        console.log(customer);
    })

    it('should can have method', () => {
        const customer: Customer = new Customer(2, 'Eko');
        customer.sayHello('Budi');

    })
 })