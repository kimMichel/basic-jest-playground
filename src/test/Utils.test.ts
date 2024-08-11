import { upperCase } from "../app/Utils"

describe('Utils test suite', () => {
    it('should return uppercase to valid string', () => {
        const sut = upperCase
        const expected = 'ABC'

        const result = sut('abc')

        expect(result).toBe(expected)
    })
})