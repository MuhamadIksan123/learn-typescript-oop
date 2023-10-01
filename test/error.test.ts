describe('Validation error', () => {
  class ValidationError extends Error {
    constructor(message: string) {
      super(message);
    }
  }

  function doubleIt(value: number): number {
    if (value < 0) {
      throw new ValidationError('Value cannot be less then 0');
    }

    return value * 2;
  }
  it('should support validation error', () => {
    try {
        const result = doubleIt(2);
        console.log(result)
    } catch (error) {
        if(error instanceof ValidationError) {
            console.log(error.message)
        }
    }
  });
});
