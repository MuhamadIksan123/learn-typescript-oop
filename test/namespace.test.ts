import { MathUtill } from '../src/math-utils';

describe('namespace', () => {
    it('should support namespace', () => {
        console.log(MathUtill.PI);
        console.log(MathUtill.sum(1,2,3,4,5))
    })
});
