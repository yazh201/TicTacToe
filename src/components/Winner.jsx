import React from "react";

const Winner = ({ winner, draw }) => {
    return (
        <div className={winner === '' ? "title-winner" : winner === 'X' ? "x-wins" : "o-wins"}>
            {winner !== '' ? winner + " Wins" : draw ? "Draw" : "Tic Tac Toe"}
        </div>
    );
}

export default Winner;