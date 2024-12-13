import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    // console.log(id, user);

    const submitJobApplication = e =>{
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value

        // console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id, 
            applicant_id: user.email,
            linkedin,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
        })
    }

  return (
    
        <div className="card bg-base-100 w-full  shadow-2xl">

<h1 className="text-5xl font-bold text-center">Apply Job and Good Luck</h1>
    
          <form  onSubmit={submitJobApplication}className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub URL</span>
              </label>
              <input
                type="URL"
                name="github"
                placeholder="GitHub URL"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="URL"
                name="resume"
                placeholder="Resume URL"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
      
  );
};


export default JobApply;
