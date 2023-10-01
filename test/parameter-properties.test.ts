describe('Paramter Properties', () => { 
    class Person {
        constructor(public name: string) {

        }
    }
    it('Should support parameter properties', () => {
        const person = new Person('Eko');
        console.log(person.name);

        person.name = 'Budi';
        console.log(person.name);
    })
 });