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
})