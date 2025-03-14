import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobPosting" element={<div>Job Posting Page</div>} />
        <Route path="/jobListing" element={<div>Job Listing Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
