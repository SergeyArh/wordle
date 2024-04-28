export function WordCurrent({current}) {
  const arrayOfCurrentWithNull = current.concat(Array(6).fill(null)).slice(0, 5);

  return (
    <div className="wordle_row">
      {
        arrayOfCurrentWithNull.map((item, i) => (
          <div className="wordle_row_item" data-state={item ? 'current' : 'none'} key={i}>{item}</div>
        ))
      }
    </div>
  )
}