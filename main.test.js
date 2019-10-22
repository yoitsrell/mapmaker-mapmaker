const {
  doubleAll,
  yelledGreetings,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
} = require('./main.js')


describe('doubleAll', () => {
  it(`doubles all numbers passed in`, () => {
    expect(doubleAll([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    expect(doubleAll([-5, 101, 0, 32.5])).toEqual([-10, 202, 0, 65]);
  })
})

describe('yelledGreetings', () => {
  it(`adds an exclamation point to the end of each string`, () => {
    expect(yelledGreetings(['hello', 'there', 'you absolute fiend'])).toEqual(['hello!', 'there!', 'you absolute fiend!']);
  })
})

describe('doubleOdd', () => {
  it(`doubles all odd numbers passed in`, () => {
    expect(doubleOdd([1, 2, 3, 4, 101, 0, 32.5])).toEqual([2, 2, 6, 4, 202, 0, 32.5]);
  })
  
  it(`can handle negative numbers`, () => {
    expect(doubleOdd([-5, -1, -100, -2])).toEqual([-10, -2, -100, -2]);
  })
})

describe('upperCaseFirstLetters', () => {
  it(`uppercases the first letter of each name (as a string) in the given array`, () => {
    expect(upperCaseFirstLetters(['colin', 'mesuara', 'genghis', 'pak', 'ginny', 'michael', 'tenzin'])).toEqual(['Colin', 'Mesuara', 'Genghis', 'Pak', 'Ginny', 'Michael', 'Tenzin'])
  })

  it(`lowercases the other letters of each name`, () => {
    expect(upperCaseFirstLetters(['cOlin', 'geNghis', 'mesUara', 'ginny', 'michael', 'pak', 'tenzin'])).toEqual(['Colin', 'Genghis', 'Mesuara', 'Ginny', 'Michael', 'Pak', 'Tenzin'])
  })
})

describe('add1ToLeft', () => {
  it(`adds a 1 on the left side of positive numbers`, () => {
    expect(add1ToLeft([1, 2, 30, 400])).toEqual([11, 12, 130, 1400])
  })

  it(`can handle negative numbers`, () => {
    expect(add1ToLeft([-1, -50])).toEqual([-11, -150])
  })
})