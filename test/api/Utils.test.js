import {sayHello} from '../../src/api/Utils';

describe('Utils Test', () => {
    it("should return `Hello Siva! Welcome to my website` for input `Siva`", () => {
        var sResult = sayHello({name: 'Siva'});
        expect(sResult).toBe('Hello Siva! Welcome to my website');
    });
});