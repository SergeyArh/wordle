export function NewGame({startNewGame}) {
  return (
    <div className="modal_window center">
      <div className="new_game_item">
        <h3>Hачать новую игру?</h3>
        <div className="new_game_buttons">
          <button onClick={() => startNewGame()}>Да</button>
        </div>
      </div>
    </div>
  )
}