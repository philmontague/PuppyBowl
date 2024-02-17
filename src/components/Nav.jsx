import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav-bar'>
      <ul className='nav-list'>
        <li>
          <Link to="/">All Players</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/create">Create New Player</Link>
        </li>
      </ul>
    </nav>
  );
}
