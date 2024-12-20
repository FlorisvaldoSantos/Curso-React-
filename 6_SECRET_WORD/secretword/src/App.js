//css
import './App.css';

//react
import { useCallback, useEffect, useState} from "react"

//data
import { wordsList } from "./data/words";

//components 
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';


const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

function App() {

  const [gameStage, SetgameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  
  //piked word and category
  const pickedWordAndCategory = () =>{

    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    // pick random word 
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    // return the values 
    return {word, category};
  }

  // start the game 
  const startGame = () => {

    //initialize the categories and words.
    const {word, category } = pickedWordAndCategory();
    console.log(word, category);

    // create array of letters 
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters);

    //fill states 
    setPickedWord(word);
    setpickedCategory(category);
    setLetters(wordLetters);

    SetgameStage(stages[1].name)
  }

  // process letter
  const verifyLetter = () => {
    SetgameStage(stages[2].name)
  }

  // go back to beginig 
  const retry = () => {
    SetgameStage(stages[0].name)
  }

  return (
    <div className="App">
       
       { gameStage === "start" && <StartScreen startGame={startGame}/>}
       { gameStage === "game"  && <Game verifyLetter={verifyLetter}/>}
       { gameStage === "end"   && <GameOver retry={retry}/>}

    </div>
  );
}

export default App;
