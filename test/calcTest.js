import expect from 'expect';
import {Calculator} from '../src/calc';

describe('Calculator', () => {

    it('should add the summands correctly', () => {
        const calc = new Calculator();
        expect(calc.add(1,2)).toBe(3);
    });

    it('should add the summands correctly (static call)', () => {
        expect(Calculator.sum(1,2)).toBe(3);
    })

});
