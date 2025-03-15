import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Joblisting from './pages/jobListing'
import JobPosting from './pages/jobPosting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobPosting" element={<JobPosting/>} />
        <Route path="/jobListing" element={<Joblisting/>} />
      </Routes>
    </Router>
  );
}

export default App;
