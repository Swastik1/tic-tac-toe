import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    //btnCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-name">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
