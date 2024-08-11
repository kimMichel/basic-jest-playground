import { upperCase } from "../app/Utils"

describe('Utils test suite', () => {
    it('should return uppercase of valid string', () => {
        // arrange:
        const sut = upperCase
        const expected = 'ABC'

        // act:
        const result = sut('abc')

        // assert:
        expect(result).toBe(expected)
    })

    describe('toUpperCase examples', () => {
        it.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'cba', expected: 'CBA' },
            { input: 'def', expected: 'DEF' },
        ])('$input toUpperCase should be $expected', ({ input, expected }) => {
            const result = upperCase(input)
            expect(result).toBe(expected)
        })
    })
})