import { WordEmpty } from "./WordEmpty";
import { WordExist } from "./WordExist";
import { WordCurrent } from "./WordCurrent";

export function Wordle({words, current, target}) {
  const countOfEmptyRow = 6 - (words.length + (current.length ? 1 : 0));
  const arrayOfEmptyRow = Array(countOfEmptyRow).fill(null);

  return (
    <div className="wordle">
      {
        words.map((word, i) => (
          <WordExist word={word} target={target} key={i}/>
        ))
      }
      {
        current.length !== 0 && (
          <WordCurrent current={current} key={'6'}/>
        )
      }
      { 
        arrayOfEmptyRow.map((_, i) => (
          <WordEmpty key={i + 7}/>
        ))
      }
    </div>
  )
}