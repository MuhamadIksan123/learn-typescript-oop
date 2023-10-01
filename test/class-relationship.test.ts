describe('class relationship', () => { 
    class Customer {
        constructor(public name: string) {}
    }

    class Person {
        constructor(public name:string) {}
    }

    it('should support', () => {
        const person: Person = new Customer('Eko');
        console.log(person.name);
    })
 })