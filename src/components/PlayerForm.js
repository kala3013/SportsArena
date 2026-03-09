import React, { useState, useEffect } from "react";

function PlayerForm({ addPlayer, editingPlayer, updatePlayer }) {

  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (editingPlayer) {
      setName(editingPlayer.name);
      setSport(editingPlayer.sport);
      setTeam(editingPlayer.team);
      setStatus(editingPlayer.status);
    }
  }, [editingPlayer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const player = {
      id: editingPlayer ? editingPlayer.id : Date.now(),
      name,
      sport,
      team,
      status
    };

    if (editingPlayer) {
      updatePlayer(player);
    } else {
      addPlayer(player);
    }

    setName("");
    setSport("");
    setTeam("");
    setStatus("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <h2>{editingPlayer ? "Edit Player" : "Add Player"}</h2>

      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Sport"
        value={sport}
        onChange={(e) => setSport(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Team / Country"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Retired">Retired</option>
      </select>

      <button type="submit">
        {editingPlayer ? "Update Player" : "Add Player"}
      </button>

    </form>
  );
}

export default PlayerForm;