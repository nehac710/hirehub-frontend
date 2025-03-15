import { useState } from "react";
import { supabase } from "../supabaseClient";
import "../styles/jobPosting.css";

function JobPosting() {
  const [jobData, setJobData] = useState({
    project_name: "",
    description: "",
    client_id: "",
    budget: "",
    skills_required: "", // Will store as a comma-separated string
    status: "open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert skills to an array
    const skillsArray = jobData.skills_required.split(",").map(skill => skill.trim());

    try {
      const { data, error } = await supabase
        .from("jobs")
        .insert([{
          ...jobData,
          skills_required: skillsArray, // Send as an array
        }]);

      if (error) throw error;

      alert("Job posted successfully!");
      setJobData({
        project_name: "",
        description: "",
        client_id: "",
        budget: "",
        skills_required: "",
        status: "open",
      });
    } catch (error) {
      console.error("Error posting job:", error.message);
      alert("Failed to post job. Please try again.");
    }
  };

  return (
    <div className="job-posting-container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit} className="job-posting-form">
        <label>Project Name:</label>
        <input
          type="text"
          name="project_name"
          value={jobData.project_name}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={jobData.description}
          onChange={handleChange}
          required
        />

        <label>Client ID:</label>
        <input
          type="text"
          name="client_id"
          value={jobData.client_id}
          onChange={handleChange}
          required
        />

        <label>Budget:</label>
        <input
          type="number"
          name="budget"
          value={jobData.budget}
          onChange={handleChange}
          required
        />

        <label>Skills Required (comma-separated):</label>
        <input
          type="text"
          name="skills_required"
          value={jobData.skills_required}
          onChange={handleChange}
          placeholder="e.g. React, Django, PostgreSQL"
          required
        />

        <button type="submit" className="post-job-button">Post Job</button>
      </form>
    </div>
  );
}

export default JobPosting;
