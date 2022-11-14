import React from 'react'
import './quiz.css'
import image1 from './quizimage.png'

function QuizApp() {
  return (
    <div className='containe'>
        <img src={image1}></img>
        <p>Question 1 0f 10</p>
        <h3>In which City of Germany is the largest Port located?</h3>
        <button>Option A</button>
        <button>Option B</button>
        <button>Option C</button>
        <button>Option D</button>
    </div>
  )
}

export default QuizApp