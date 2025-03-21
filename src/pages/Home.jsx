import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to HireHub</h2>
      <p className="home-description">A secure freelance marketplace to connect clients and freelancers.</p>
      <div className="home-buttons">
        <Link to="/jobPosting" className="btn">Post a Job</Link>
        <Link to="/jobListing" className="btn">View Job Listings</Link>
      </div>
    </div>
  );
}

export default Home;
