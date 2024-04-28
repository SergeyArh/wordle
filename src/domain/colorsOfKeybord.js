import { getColorOfWord } from "./getColorOfWord";


export function colorsOfKeybord(words, target) {
  const colors = {
    'q': 'empty',
    'w': 'empty',
    'e': 'empty',
    'r': 'empty',
    't': 'empty',
    'y': 'empty',
    'u': 'empty',
    'i': 'empty',
    'o': 'empty',
    'p': 'empty',
    'a': 'empty',
    's': 'empty',
    'd': 'empty',
    'f': 'empty',
    'g': 'empty',
    'h': 'empty',
    'j': 'empty',
    'k': 'empty',
    'l': 'empty',
    'z': 'empty',
    'x': 'empty',
    'c': 'empty',
    'v': 'empty',
    'b': 'empty',
    'n': 'empty',
    'm': 'empty',
  }

  for (let word of words) {
    const color = getColorOfWord(word, target);
    for (let item of color) {
      if (colors[item.letter] === 'empty') {
        colors[item.letter] = item.color;
      } else if (item.color === 'correct') {
        colors[item.letter] = item.color;
      }
    }
  }
  return colors
}