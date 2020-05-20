const palindromes = require('../palindromes')

describe('palindromes()', () => {
    it('correctly identifies one word palindrome', () => {
        expect(palindromes('madam')).toEqual(['madam']);
    })
})