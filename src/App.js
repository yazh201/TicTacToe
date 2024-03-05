import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Winner from "./components/Winner";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

function App() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);

  const [score, setScore] = useState({ xScore: 0, oScore: 0 });

  // triggers when box clicks
  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updateBoard);
    setXPlaying(!xPlaying);
    console.log(updateBoard);
    const winnerValue = checkWinner(updateBoard);
    scoreCalculation(winnerValue);
  };

  // used to check winner for every move
  const checkWinner = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setWinner(board[x]);

        setTimeout(() => {
          resetBoard();
          setWinner("");
        }, 1000);

        return board[x];
      }
    }

    if (!board.includes(null) && winner === "") {
      setDraw(true);
      setTimeout(() => {
        resetBoard();
        console.log(winner);
        setDraw(false);
      }, 1000);
    }
  };

  // score is calculated based on the winner value
  const scoreCalculation = (winnerValue) => {
    console.log(winnerValue);
    if (winnerValue) {
      if (winnerValue === "O") {
        let { oScore } = score;
        oScore++;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore++;
        setScore({ ...score, xScore });
      }
    }

    console.log(score);
  };

  // only resets board
  const resetBoard = () => {
    setXPlaying(true);
    setBoard(Array(9).fill(null));
  };

  // resets all including scores; means new round
  const resetAll = () => {
    resetBoard();
    setScore({ xScore: 0, oScore: 0 });
  };

  return (
    <div className="container">
      <Winner winner={winner} draw={draw} />
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={handleBoxClick} />
      <ResetButton resetAll={resetAll} />
    </div>
  );
}

export default App;
