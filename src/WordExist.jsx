import { getColorOfWord } from "./domain/getColorOfWord";

export function WordExist({word, target}) {
  const cells = getColorOfWord(word, target);

  return (
    <div className="wordle_row">
      {
       cells.map(({ color, letter }, i) => (
        <div className="wordle_row_item" data-state={color} key={i}>{letter}</div>
       )) 
      }
    </div>

  )
}