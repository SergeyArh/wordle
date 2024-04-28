import './App.css';
import { Keyboard } from './Keyboard';
import { useState, useMemo } from 'react';
import { Wordle } from './Wordle';
import { colorsOfKeybord } from "./domain/colorsOfKeybord";
import wordsList  from './wordleWordList.json';
import { ModalWindow } from './ModalWindow';
import { NewGame } from './NewGame';
import { Win } from './Win';
import { Lose } from './Lose';

function App() {

  const [values, setValues] = useState({
    words: [],
    current: [],
    target: createTargetWord()
  })
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const colors = useMemo(() => colorsOfKeybord(values.words, values.target), [values]);
  
  const isWin = values.words.at(-1) === values.target;
  const isLose = values.words.length === 6 && !isWin;

  function createTargetWord() {
    const arr = wordsList.map(word => word.replace(/'/g, ''));
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]
  }

  function isValidWord(word) {
    const arr = wordsList.map(word => word.replace(/'/g, ''));
    return arr.includes(word)
  }

  function startNewGame() {
    setValues({
        words: [],
        current: [],
        target: createTargetWord()
    })
  }
  
  function onLetterPress(symbol) {
    return setValues(values => {
      if (values.current.length !== 5 && values.words.length !== 6) {
        return {
          words: values.words,
          current: [...values.current, symbol],
          target: values.target
        }
      }
      return values
    })
  }

  function onBackspacePress() {
    return setValues(values => {
      return {
        words: values.words,
        current: values.current.slice(0, -1),
        target: values.target
      }
    })
  }

  function onEnterPress() {
    return setValues(values => {
      const current = values.current.join('');
      if (current === values.target) {
        return {
          words: [...values.words, current],
          current: [],
          target: values.target
        }
      }
      if (current.length === 5 && !isValidWord(current)) {
        setIsOpenModalWindow(true);
        setTimeout(() => setIsOpenModalWindow(false), 2000);
        return values
      }
      if (current.length === 5 && values.words.length !== 6) {
        return {
          words: [...values.words, current],
          current: [],
          target: values.target
        }
      }
      return values
    })
  }
  
  
  return (
    <div className='wrapper'>
      {
        isOpenModalWindow && <ModalWindow />
      }
      {
        isWin && <Win />
      }
      {
        isLose && <Lose target={values.target} />
      }
      {
      (isWin || isLose) && 
        <NewGame 
          startNewGame={startNewGame} 
        />
      }
      <Wordle 
        words={values.words} 
        current={values.current} 
        target={values.target}
      />
      <Keyboard
        onLetterPress={onLetterPress}
        onBackspacePress={onBackspacePress}
        onEnterPress={onEnterPress}
        colors={colors}
      />
    </div>
  ); 
} 

export default App;

// reducers
// таблица пользователей и форма добавления + useDispatch, useSelector, connect
// добавляем redux в покемонов
// thunk для загрузки покемонов + middleware на переключение страницы
// своя реализация redux (getState, dispatch, subscribe)
// своя реализация redux: middleware
// своя реализация react-redux: connect, useSelector, useDispatch
// redux-toolkit
