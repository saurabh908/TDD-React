const palindromes = require('../palindromes')

describe('palindromes()', () => {
    it('correctly identifies one word palindrome', () => {
        expect(palindromes('madam')).toEqual(['madam']);
        expect(palindromes('racecar')).toEqual(['racecar']);
    })
})

const arr = [1, 2];

//npx prettier-eslint $PWD/tests/palindromes.test.js