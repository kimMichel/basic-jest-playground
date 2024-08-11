import { StringInfo } from "../app/Utils"

describe('StringInfo test suite', () => {
    let sut: StringInfo

    beforeEach(() => {
        sut = new StringInfo()
    })

    it('should return uppercase of valid string', () => {
        // arrange:
        const expected = 'ABC'

        // act:
        const result = sut.upperCase('abc')

        // assert:
        expect(result).toBe(expected)
    })

    describe('toUpperCase examples', () => {
        it.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'cba', expected: 'CBA' },
            { input: 'def', expected: 'DEF' },
        ])('$input toUpperCase should be $expected', ({ input, expected }) => {
            const result = sut.upperCase(input)
            expect(result).toBe(expected)
        })
    })
})