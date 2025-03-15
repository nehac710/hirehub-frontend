import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/jobListing.css';

function JobListing() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*');

      if (error) {
        console.error('Error fetching jobs:', error.message);
      } else {
        setJobs(data);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-listing-container">
      <h2 className="job-listing-title">Available Projects</h2>
      <div className="job-card-container">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.project_id} className="job-card">
              <h3 className="job-title">{job.project_name}</h3>
              <p className="job-description">{job.description}</p>
              <p className="job-company">Client ID: {job.client_id}</p>
              <p className="job-location">Budget: ${job.budget}</p>
              <p className="job-skills">
                Skills Required: {job.skills_required?.join(', ') || 'None'}
              </p>
              <p className="job-status">Status: {job.status}</p>
              <p className="job-date">Posted on: {new Date(job.posted_date).toLocaleDateString()}</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default JobListing;
