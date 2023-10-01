describe('Instaceof', () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const eko = new Manager();
  it('should have proble have using typeof', () => {
    console.log(typeof budi);
    console.log(typeof eko);
  });

  it('should support instanceof', () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);

    expect(eko instanceof Employee).toBe(false);
    expect(eko instanceof Manager).toBe(true);
  });
});
