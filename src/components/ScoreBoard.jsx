const ScoreBoard = ({ score, xPlaying }) => {
    return (
        <div className="score-board">
            <p className={xPlaying ? "x-value" : "value"}>X - {score.xScore}</p>
            <p className={!xPlaying ? "o-value" : "value"}>O - {score.oScore}</p>
        </div>
    );
}

export default ScoreBoard;