import React, { useState, useEffect } from 'react';

export default function SinglePlayerView({ players }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundPlayer, setFoundPlayer] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPlayer();
  };

  const searchPlayer = () => {
    if (searchTerm.trim() !== '') {
      const found = players.find(
        (player) =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFoundPlayer(found || null);
    } else {
      setFoundPlayer(null);
    }
  };

  useEffect(() => {
    searchPlayer();
  }, [players, searchTerm]);

  return (
    <div className='container'>
      <h1 className='center'>Search Player</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Player"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      {foundPlayer ? (
        <div>
          <img src={foundPlayer.imageUrl} alt={foundPlayer.name} />
          <p>Name: {foundPlayer.name}</p>
          <p>Breed: {foundPlayer.breed}</p>
          <p>Status: {foundPlayer.status}</p>
        </div>
      ) : searchTerm.trim() !== '' ? (
        <p>No Results Found</p>
      ) : null}
    </div>
  );
}
