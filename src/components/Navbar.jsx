import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>HireHub</h1>
      <div>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/jobPosting" className="nav-link">Post a Job</Link>
        <Link to="/jobListing" className="nav-link">Job Listings</Link>
      </div>
    </nav>
  );
}

export default Navbar;
