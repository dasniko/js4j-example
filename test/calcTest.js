import expect from 'expect';
import {Calculator} from '../src/calc';

describe('Calculator', () => {

    it('should add the summands correctly', () => {
        expect(Calculator.add(1,2)).toBe(3);
    })

});
