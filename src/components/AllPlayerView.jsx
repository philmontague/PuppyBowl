import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function AllPlayerView({ players }) {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    // Filter out duplicate entries
    const uniquePlayers = players.filter((player, index) => {
      const firstIndex = players.findIndex((p) => p.id === player.id);
      return firstIndex === index;
    });

    setAllPlayers(uniquePlayers);
  }, [players]);

  const handleDelete = (id) => { 
    const confirmDelete = window.confirm('Are you sure you want to delete this player?')
    if (confirmDelete) {
        const upDatedPlayers = allPlayers.filter(player => player.id !== id)
        setAllPlayers(upDatedPlayers)
    }
  }
  

  return (
    <div className='grid'>
      {allPlayers.map((player) => (
        <div key={player.id} className='grid-item'>
          <p>{player.name}</p>
          <img src={player.imageUrl} alt={player.name} />
          <div>
          <Link to={`/details/${player.id}`}>
            <button className='button'>Details</button>
          </Link>
            <button className='button' onClick={() => handleDelete(player.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
