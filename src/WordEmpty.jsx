
export function WordEmpty() {

  return (
    <div className="wordle_row">
      <div className="wordle_row_item" data-state='none' key={'1'}></div>
      <div className="wordle_row_item" data-state='none' key={'2'}></div>
      <div className="wordle_row_item" data-state='none' key={'3'}></div>
      <div className="wordle_row_item" data-state='none' key={'4'}></div>
      <div className="wordle_row_item" data-state='none' key={'5'}></div>
    </div>
  )
}