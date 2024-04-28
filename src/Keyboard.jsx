import { useEffect } from "react";
import { KeyboardRow } from "./KeyboardRow";

// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
//window.addEventListener('keydown', (e) => console.log('---', e.key))

// 1. доделать ввод с клавиатуры
// 2. разбить компонент слова на 3 компонента
// 3. красить клавиатуру (нужна функция + тесты)
// 4. тесты на раскраску слова
// 5. на занятии: тесты на компоненты (react testing library)

export function Keyboard({
  onLetterPress,
  onBackspacePress,
  onEnterPress,
  colors
}) {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  useEffect(() => {
    console.log("useEffect")
    function buttonClick(e) {
      e.preventDefault();
      if (e.key === 'Enter') {
        return onEnterPress()
      } 
      if (e.key === 'Backspace') {
        return onBackspacePress()
      }
      const key = e.key.toLowerCase();
      if (rows.flat().includes(key)) {
        return onLetterPress(key)
      }
    }
    window.addEventListener('keydown', buttonClick);
    return () => window.removeEventListener('keydown', buttonClick);
  }, []);

  return (
    <div className="keyboard">
      <div className="row">
        <KeyboardRow 
          letters={rows[0]}
          colors={colors}
          key={'1'}
          onLetterPress={onLetterPress}
        />
      </div>
      <div className="row">
        <div className="less"></div>
        <KeyboardRow
          letters={rows[1]}
          colors={colors}
          key={'2'} 
          onLetterPress={onLetterPress}
        />
        <div className="less"></div>
      </div>
      <div className="row">
        <button className="button more" data-state="empty" onClick={() => onEnterPress()}>↵</button>
        <KeyboardRow
          letters={rows[2]}
          colors={colors} 
          key={'3'} 
          onLetterPress={onLetterPress}
        />
        <button className="button more" data-state="empty" onClick={() => onBackspacePress()}>←</button>
      </div> 
    </div>
  )
}