import { getColorOfWord } from "./getColorOfWord";


export function colorsOfKeybord(words, target, isEnglish) {
  const colors = isEnglish ? {
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
  } : {
    'ё': 'empty',
    'й': 'empty',
    'ц': 'empty',
    'у': 'empty',
    'к': 'empty',
    'е': 'empty',
    'н': 'empty',
    'г': 'empty',
    'ш': 'empty',
    'щ': 'empty',
    'з': 'empty',
    'х': 'empty',
    'ъ': 'empty',
    'ф': 'empty',
    'ы': 'empty',
    'в': 'empty',
    'а': 'empty',
    'п': 'empty',
    'р': 'empty',
    'о': 'empty',
    'л': 'empty',
    'д': 'empty',
    'ж': 'empty',
    'э': 'empty',
    'я': 'empty',
    'ч': 'empty',
    'с': 'empty',
    'м': 'empty',
    'и': 'empty',
    'т': 'empty',
    'ь': 'empty',
    'б': 'empty',
    'ю': 'empty'
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