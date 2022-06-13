import React,{useState} from 'react'
import Board from './Board'
export default function Game() {
    const [history,changeHistory] =  useState([ 
        {square: Array(9).fill(null)},
    ]);
    const [isNextX,setIsNextX] = useState(true)
    const [stepNumber,setStep] = useState(0);

    const handleClick = (i)=>
    
    {
        
        let t = history[stepNumber]
        
        let square = t.square
        if(checkWinner( square) || square[i])
        {
            return
        }
        const squares = square.slice();
     
        
        

        squares[i] = isNextX?'X':'0';

        let final_moves = [...(history.slice(0,stepNumber+1)),{square: squares}]
        console.log(final_moves)
        changeHistory(final_moves)
        console.log(final_moves.length)
        setStep(final_moves.length-1)
        isNextX ? setIsNextX(false) : setIsNextX(true)
       



    }


    
    const checkWinner = (square) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

        for (var i = 0 ; i <lines.length ; i++)
        {
            const [a,b,c] = lines[i]
            if(square[a]===square[b] && square[b]===square[c] && square[c]===square[a])
            {
                return square[a]
            }
        }
        return null
    }

    let h = history[stepNumber]
    const winner = checkWinner(h.square)
    let status;

    if(winner)
    {
        status = "Winner " + winner
    }
    else
    {
        status = "Next Player " + (isNextX ? 'X' : '0')
    }
    
    const jumpTo = (step) =>{
        setStep(step)
        setIsNextX((step % 2) === 0)
    }
    
    const moves = history.map((move,step)=>{
        const desc = step ? " Got to # Move " + step : "Go to start of Game";
        return <li key={step}> <button onClick={()=> jumpTo(step)}>{desc}</button></li>
    })
  return (

  
    <>
    {status}
    <Board handleClick={handleClick} square={ (history[stepNumber]).square} />
    {moves}
    </>
  )
}
