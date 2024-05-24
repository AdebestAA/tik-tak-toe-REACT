import  { useEffect, useState } from 'react'
import Box from "./Box"
const winningPossibilities = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]


const Tik = () => {
     const [value,setValue] = useState("X")
     const [squares,setSquares] = useState(Array(9).fill(""))
     const [xIsNext,setXIsNext] = useState(true)
     const [gamerOver,setGameOver] = useState(false)
     const [status,setStatus] = useState("")
     const [draw,setDraw] = useState(false)
     
    
    const checkWinningPossiblities = ()=>{


        for (let i = 0; i < winningPossibilities.length; i++) {
        let firstValue = winningPossibilities[i][0] 
        let secondValue = winningPossibilities[i][1] 
        let thirdValue = winningPossibilities[i][2] 

        if (squares[firstValue] !== "" && squares[firstValue] === squares[secondValue] && squares[firstValue] === squares[thirdValue] ) {
          setGameOver(true)
            setValue(squares[firstValue])
            
            break;
        } 

   else if (!squares.includes("")) {
   
    setStatus("that was a draw")
   }
   else{
    setStatus(`${xIsNext ? "X is next" : "0 is next"}`)
   }
        }
     
     }
 
   


        const handleValue = (currIndex)=>{
            
        let copySquares = [...squares]
        if (copySquares[currIndex] || gamerOver) {
        return
        }
        if (value === "X") {

        copySquares[currIndex] = value
        setValue("O")
        setXIsNext(false)
        }
        else if(value === "O"){
        copySquares[currIndex] = value
        setXIsNext(true)
        setValue("X")
        }
        setSquares(copySquares)
        }

        useEffect(()=>{
    if (gamerOver) {
    setStatus(`${value} has won the game`)
            }
        },[gamerOver])

        useEffect(()=>{
            checkWinningPossiblities()
        },[squares])
return (
<main className="boxes-container">
  
    <div className="each-section">
    <Box value={squares[0]} handleValue={()=>handleValue(0)}/>
    <Box  value={squares[1]} handleValue={()=>handleValue(1)}/>
    <Box  value={squares[2]} handleValue={()=>handleValue(2)}/>
    </div>
    <div className="each-section">

    <Box  value={squares[3]} handleValue={()=>handleValue(3)}/>
    <Box  value={squares[4]} handleValue={()=>handleValue(4)}/>
    <Box  value={squares[5]} handleValue={()=>handleValue(5)}/>
    </div>
    <div className="each-section">
    <Box  value={squares[6]} handleValue={()=>handleValue(6)}/>
    <Box  value={squares[7]} handleValue={()=>handleValue(7)}/>
    <Box  value={squares[8]}handleValue={()=>handleValue(8)}/>
    </div>
    <p>
        {status}
    
     </p>
</main>
  )
}

export default Tik
