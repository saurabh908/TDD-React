const palindromes = require('../palindromes')

describe('palindromes()', () => {
    it('correctly identifies one word palindrome', () => {
        expect(palindromes('madam')).toEqual(['madam']);
        expect(palindromes('racecar')).toEqual(['racecar']);
    })
})

//npx prettier-eslint $PWD/tests/palindromes.test.js