import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
    it('should return Hello Agung', () => {
        expect(sayHello('Agung')).toBe('Hello Agung');
    });
});