import { getColorOfWord } from "./getColorOfWord";

test('цвета букв слова eagle', () => {

  const word = 'eagle';
  const actualResult = getColorOfWord(word, 'peace');
  const expectedResult = [
    {
      letter: 'e',
      color: 'present'
    },
    { 
      letter: 'a',
      color: 'present'
    },
    {
      letter: 'g',
      color: 'absent'
    },
    {
      letter: 'l',
      color: 'absent'
    },
    {
      letter: 'e',
      color: 'correct'
    }
  ]

  expect(actualResult).toEqual(expectedResult);

})

test('цвета букв слова eeded', () => {

  const word = 'eeded';
  const actualResult = getColorOfWord(word, 'peace');
  const expectedResult = [
    {
      letter: 'e',
      color: 'present'
    },
    {
      letter: 'e',
      color: 'correct'
    },
    {
      letter: 'd',
      color: 'absent'
    },
    {
      letter: 'e',
      color: 'absent'
    },
    {
      letter: 'd',
      color: 'absent'
    }
  ]

  expect(actualResult).toEqual(expectedResult);
});

test('цвета букв слова sport', () => {

  const word = 'sport';
  const actualResult = getColorOfWord(word, 'peace');
  const expectedResult = [
    {
      letter: 's',
      color: 'absent'
    },
    {
      letter: 'p',
      color: 'present'
    },
    {
      letter: 'o',
      color: 'absent'
    },
    {
      letter: 'r',
      color: 'absent'
    },
    {
      letter: 't',
      color: 'absent'
    }
  ]
  expect(actualResult).toEqual(expectedResult);
});

test('цвета букв слова greed', () => {

  const word = 'greed';
  const actualResult = getColorOfWord(word, 'peace');
  const expectedResult = [
    {
      letter: 'g',
      color: 'absent'
    },
    {
      letter: 'r',
      color: 'absent'
    },
    {
      letter: 'e',
      color: 'present'
    },
    {
      letter: 'e',
      color: 'present'
    },
    {
      letter: 'd',
      color: 'absent'
    }
  ]
  expect(actualResult).toEqual(expectedResult);
});

test('цвета букв слова award', () => {

  const word = 'award';
  const actualResult = getColorOfWord(word, 'peace');
  const expectedResult = [
    {
      letter: 'a',
      color: 'absent'
    },
    {
      letter: 'w',
      color: 'absent'
    },
    {
      letter: 'a',
      color: 'correct'
    },
    {
      letter: 'r',
      color: 'absent'
    },
    {
      letter: 'd',
      color: 'absent'
    }
  ]
  expect(actualResult).toEqual(expectedResult);
});

test('цвета букв слова salad', () => {

  const word = 'salad';
  const actualResult = getColorOfWord(word, 'peace');
  const expectedResult = [
    {
      letter: 's',
      color: 'absent'
    },
    {
      letter: 'a',
      color: 'present'
    },
    {
      letter: 'l',
      color: 'absent'
    },
    {
      letter: 'a',
      color: 'absent'
    },
    {
      letter: 'd',
      color: 'absent'
    }
  ]
  expect(actualResult).toEqual(expectedResult);
});

test('цвета букв слова peace', () => {

  const word = 'peace';
  const actualResult = getColorOfWord(word, 'peace');
  const expectedResult = [
    {
      letter: 'p',
      color: 'correct'
    },
    {
      letter: 'e',
      color: 'correct'
    },
    {
      letter: 'a',
      color: 'correct'
    },
    {
      letter: 'c',
      color: 'correct'
    },
    {
      letter: 'e',
      color: 'correct'
    }
  ]
  expect(actualResult).toEqual(expectedResult);
});