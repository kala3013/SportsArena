import React from "react";

function PlayerCard({ player, deletePlayer, editPlayer }) {

  const getIcon = (sport) => {
    if (sport === "Cricket") return "🏏";
    if (sport === "Football") return "⚽";
    if (sport === "Basketball") return "🏀";
    return "🎮";
  };

  return (
    <div className="card">

      <h3>{getIcon(player.sport)} {player.name}</h3>

      <p><b>Sport:</b> {player.sport}</p>
      <p><b>Team:</b> {player.team}</p>
      <p><b>Status:</b> {player.status}</p>

      <button onClick={() => editPlayer(player)}>Edit</button>
      <button onClick={() => deletePlayer(player.id)}>Delete</button>

    </div>
  );
}

export default PlayerCard;