import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import AllPlayerView from './components/AllPlayerView';
import SinglePlayerView from './components/SinglePlayerView';
import CreatePlayerForm from './components/CreatePlayerForm';
import SinglePuppyDetails from './components/SinglePuppyDetails';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players');
        setPlayers(res.data.data.players); // Ensure that players array is properly set
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<AllPlayerView players={players} />} />
          <Route path="/search" element={<SinglePlayerView players={players} searchTerm={searchTerm} />} />
          <Route path="/create" element={<CreatePlayerForm />} /> 
          <Route path="/details/:puppyId" element={<SinglePuppyDetails players={players} />} />
        </Routes>
      </div>
    </Router>
  );
}
