import React from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  let gameBoardContent = board.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) => (
          <li key={colIndex}>
            <button
              onClick={() => onSelectSquare(rowIndex, colIndex)}
              disabled={playerSymbol !== null}
            >
              {playerSymbol}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return <ol id="game-board">{gameBoardContent}</ol>;
};

export default GameBoard;
