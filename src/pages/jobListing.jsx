import React, { useState, useEffect } from 'react';
import '../styles/JobListing.css';

function JobListing() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Random sample jobs data
        const sampleJobs = [
            {
                id: 1,
                title: "Frontend Developer",
                company: "Tech Solutions",
                location: "New York, USA",
                description: "Develop and maintain user interfaces using React.js."
            },
            {
                id: 2,
                title: "Backend Developer",
                company: "DataWave",
                location: "San Francisco, USA",
                description: "Build and manage APIs using Django and DRF."
            },
            {
                id: 3,
                title: "Full Stack Developer",
                company: "Innovate Labs",
                location: "Remote",
                description: "Work on full-stack applications with React and Django."
            },
            {
                id: 4,
                title: "UI/UX Designer",
                company: "Creativa Studio",
                location: "Bangalore, India",
                description: "Design intuitive and engaging user interfaces."
            },
        ];

        // Simulating data fetch
        setTimeout(() => {
            setJobs(sampleJobs);
        }, 1000);
    }, []);

    return (
        <div className="job-listing-container">
            <h2 className="job-listing-title">Available Jobs</h2>
            <div className="job-card-container">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div className="job-card" key={job.id}>
                            <h3 className="job-title">{job.title}</h3>
                            <p className="job-company">{job.company}</p>
                            <p className="job-location">{job.location}</p>
                            <p className="job-description">{job.description}</p>
                            <button className="apply-button">Apply Now</button>
                        </div>
                    ))
                ) : (
                    <p>Loading jobs...</p>
                )}
            </div>
        </div>
    );
}

export default JobListing;
