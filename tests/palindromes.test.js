const palindromes = require('../palindromes');
const {
  prepareStr,
  isPalindrome,
  stringStartPalindrome,
  punctuationPalindrome,
} = palindromes;

describe('prepareStr()', () => {
  it('converts the given string to lowercase', () => {
    expect(prepareStr('aAaA')).toBe('aaaa');
  });

  it('remove all non-letter charcters', () => {
    expect(prepareStr('TO infinity, and beyond!')).toBe('toinfinityandbeyond');
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
  });
});

describe('isPalindrome()', () => {
  it('returns when given word is palindrome', () => {
    expect(isPalindrome('aHa')).toBe(true);
  });
  it('returns when given word is non-palindrome', () => {
    expect(isPalindrome('nope')).toBe(false);
    expect(isPalindrome('almostomla')).toBe(false);
  });
});

describe('stringStartPalindrome()', () => {
  it('returns the longest palindromes at the start of the string', () => {
    expect(stringStartPalindrome('wow')).toBe('wow');
    expect(stringStartPalindrome('hohoho')).toBe('hohoh');
  });
  it('returns null if palindrome word length is not 3+', () => {
    expect(stringStartPalindrome('wo')).toBe(null);
    expect(stringStartPalindrome('abcda')).toBe(null);
    expect(stringStartPalindrome('bananarama')).toBe(null);
  });
});

describe('punctuationPalindrome()', () => {
  it('checks special characters', () => {
    expect(punctuationPalindrome('0_0 (: /- :) 0_0')).toEqual('0000');
    expect(punctuationPalindrome('1 eye for of 1 eye.')).toEqual([]);
    expect(punctuationPalindrome('not a palindrome')).toEqual([]);
  });
});

describe('palindromes()', () => {
  it('correctly identifies one word palindrome', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecar')).toEqual(['racecar']);
  });

  it('returns empty array when given one word is non-palindromes', () => {
    expect(palindromes('almostomla')).toEqual([]);
    expect(palindromes('nope')).toEqual([]);
  });

  it('ignores casing', () => {
    expect(palindromes('WoW')).toEqual(['wow']);
  });

  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
    expect(palindromes('0_0 (: /- :) 0_0')).toEqual(['0000']);
  });

  it('detects multi word palindrome', () => {
    expect(palindromes('A man, a plan, a canal. Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
    expect(palindromes('never odd or even')).toEqual(['neveroddoreven']);
    expect(palindromes('My age is 0, 0 si ega ym.')).toEqual([
      'myageis00siegaym',
    ]);
  });

  it('detects multi word non-palindrome', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
    //expect(palindromes('1 eye for of 1 eye.')).toEqual([]);
    //expect(palindromes('not a palindrome')).toEqual([]);
  });
});

//npx prettier-eslint $PWD/tests/palindromes.test.js
