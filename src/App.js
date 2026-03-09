import React, { useState } from "react";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import PlayerForm from "./components/PlayerForm";
import Footer from "./components/Footer";
import "./styles/style.css";

function App() {

  const [players, setPlayers] = useState([
    { id: 1, name: "Virat Kohli", sport: "Cricket", team: "India", status: "Active" },
    { id: 2, name: "Lionel Messi", sport: "Football", team: "Argentina", status: "Active" }
  ]);

  const [search, setSearch] = useState("");
  const [editingPlayer, setEditingPlayer] = useState(null);

  const addPlayer = (player) => {
    player.id = Date.now();
    setPlayers([...players, player]);
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const editPlayer = (player) => {
    setEditingPlayer(player);
  };

  const updatePlayer = (updatedPlayer) => {
    setPlayers(players.map(p =>
      p.id === updatedPlayer.id ? updatedPlayer : p
    ));
    setEditingPlayer(null);
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <Header />

      <PlayerForm
        addPlayer={addPlayer}
        editingPlayer={editingPlayer}
        updatePlayer={updatePlayer}
      />

      <h2>Player List</h2>

      <input
        type="text"
        placeholder="Search Player..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="player-list">
        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            deletePlayer={deletePlayer}
            editPlayer={editPlayer}
          />
        ))}
      </div>

      <Footer />

    </div>
  );
}

export default App;