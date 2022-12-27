import './App.css';
import { useState, useEffect } from "react";
import { GiTargetArrows } from 'react-icons/gi';


function App() {
      const [state, setState] = useState({
        num1: 1,
        num2: 2,
        response: "",
        score: 0,
        incorrect: false
      })

      function keypress(event) {
        if (answer.lenght > 0) {
        if(event.key === 'Enter') {
            
            const answer = parseInt(state.response);
            if (state.num1 + state.num2 === answer) {
              setState({
                ...state,
                num1: Math.ceil(Math.random * 10),
                num2: Math.ceil(Math.random * 10),
                score: state.score + 1,
                 response: "",
                 incorrect: false
              })
            }
            else {
               setState({
                ...state,
                
                score: state.score - 1,
                response: "",
                incorrect: true
               })
            }
        
        }
    
      }
      else {

      }
      }

      function updateresponse(event) {
        setState({
            ...state,
            response: target.event.value
        })
    }
    
    if (state.score === 10) {
        <div></div>
    }
    

    return (
        <div>
            <div className={state.incorrect ? "incorrect" : ""} id="problem">{state.num1} + {state.num2}</div>
            <input onKeyPress={keypress} onChange={updateresponse} value={state.response}/>
        </div>
    )
}

export default App;






function App() {
    const [count, setCount] = useState (0);
    function counter() {
        
        setCount(count + 1)
        
    }
    reture(
        <div>
        <dive>{count}</dive>
        <button onClick={counter}>click</button>
        </div>
    )
}