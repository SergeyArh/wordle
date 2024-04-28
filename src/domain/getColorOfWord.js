export function getColorOfWord(word, target) {
  let res = [];
  let arrOfTarget = target.split('');
  for (let i = 0; i < word.length; i++) {
    const obj = {};
    obj.letter = word[i];
    if (word[i] === arrOfTarget[i]) {
      obj.color = 'correct';
      arrOfTarget[i] = null;
    } else {
      obj.color = 'absent'
    }
    res.push(obj)
  }
  for (let item of res) {
    if (item.color === 'absent') {
      let index = arrOfTarget.findIndex(letter => letter === item.letter);
      if (index !== -1) {
        item.color = 'present';
        arrOfTarget[index] = null;
      }
    }
  }
  return res
}