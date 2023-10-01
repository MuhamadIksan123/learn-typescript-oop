describe('static', () => {
  class Configuration {
    static NAME: string = 'Belajar Typescript OOP';
    static VERSION: number = 1.0;
    static AUTHOR: string = 'Eko Kurniawan Khanedy';
  }

  class MathUtill {
    static sum(...values: number[]): number {
        let total = 0;
        for (const value of values) {
            total += value
        }
        return total;
    }
  }

  it('should support static method', () => {
    console.log(MathUtill.sum(1, 2, 3, 4, 5))
  })

  it('should support', () => {
    console.log(Configuration.NAME);
    console.log(Configuration.VERSION);
    console.log(Configuration.AUTHOR);
  });
});
