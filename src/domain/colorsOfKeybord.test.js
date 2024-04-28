import { colorsOfKeybord } from "./colorsOfKeybord";

test('colors of intro target', () => {

  const words = ['sport', 'salad', 'union', 'eagle'];
  const target = 'intro';
  const actualResult = colorsOfKeybord(words, target);
  const expectedResult = {
    'q': 'empty',
    'w': 'empty',
    'e': 'absent',
    'r': 'correct',
    't': 'present',
    'y': 'empty',
    'u': 'absent',
    'i': 'present',
    'o': 'present',
    'p': 'absent',
    'a': 'absent',
    's': 'absent',
    'd': 'absent',
    'f': 'empty',
    'g': 'absent',
    'h': 'empty',
    'j': 'empty',
    'k': 'empty',
    'l': 'absent',
    'z': 'empty',
    'x': 'empty',
    'c': 'empty',
    'v': 'empty',
    'b': 'empty',
    'n': 'correct',
    'm': 'empty',
  }
  expect(actualResult).toEqual(expectedResult);
})