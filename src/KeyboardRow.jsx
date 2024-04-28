
export function KeyboardRow({ letters, onLetterPress, colors }) {
  return letters.map(letter => (
    <button
      className="button"
      data-state={colors[letter]}
      key={letter}
      onClick={(e) => onLetterPress(e.target.value)}
      value={letter}
    >
      {letter}
    </button>
  ));
} 
