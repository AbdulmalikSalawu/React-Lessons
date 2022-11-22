import React, {useState, useEffect} from 'react'
import './quiz.css'
import image1 from './quizimage.png'

function QuizApp() {
  const [count, setCount] = useState(0)
  const [isRight, setIsRight] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const questions = [
      {
          myQuestion: "What is the capital of Greece?",
          optionA: "Milan", optionB: "Munich",
         optionC: "Athens", optionD: "Lisbon"
      },
      {
          myQuestion: "Which is not a footballer?",
          optionA: "Ronaldo", optionB: "Messi",
          optionC: "Rihanna", optionD: "Neymar"
      },
      {
          myQuestion: "Who is the nigerian president?",
          optionA: "Osinbajo", optionB: "Obasanjo",
          optionC: "Buhari", optionD: "Jonathan"
      },
      {
          myQuestion: "How many states are in the US?",
          optionA: "30", optionB: "40",
          optionC: "50", optionD: "60"
      }
  ]
  useEffect(() => {
    if(isRight===true){
      setScore(score+1)
    }
    if(count<questions.length) {
      setGameOver(false)
    } else {
      setGameOver(true)}
  }, [count])
  
  const increment = () => {
    if(count<questions.length){
        setCount(prevCount => prevCount+1)
        setIsRight(false)
    }
  }
  const rightAnswer = () => {
    if(count<questions.length){
      setIsRight(true)
      setCount(prevCount => prevCount+1)
    }
  } 
  const reloada = () => {
      window.location.reload()
  }
  return (
    <div className='containe'>
        <img src={image1}></img>
        <p>{`${(count<questions.length)? `Question ${count+1} of ${questions.length}`: `you scored ${score} out of ${questions.length}`}`}</p>
        <h4>{`${(count<questions.length)? `${questions[count].myQuestion}`: 'END OF GAME'}`}</h4>

        <button className={`${(gameOver===false)? 'active': 'nonactive'}`} onClick={increment} >{`${(count<questions.length)? `${questions[count].optionA}`: ''}`}</button>
        <button className={`${(gameOver===false)? 'active': 'nonactive'}`} onClick={increment}>{`${(count<questions.length)? `${questions[count].optionB}`: ''}`}</button>
        <button className={`${(gameOver===false)? 'active': 'nonactive'}`} onClick={rightAnswer}>{`${(count<questions.length)? `${questions[count].optionC}`: ''}`}</button>
        <button className={`${(gameOver===false)? 'active': 'nonactive'}`} onClick={increment}>{`${(count<questions.length)? `${questions[count].optionD}`: ''}`}</button><br />
        
        <button className='reset' onClick={reloada}>Restart</button>
    </div>
  )
}
export default QuizApp