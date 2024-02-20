import './JobList.css';

import React, { useEffect, useState } from 'react';
import JobShow from '../JobShow/JobShow';
export default function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../../../data.json');
      const data = await res.json();
      setJobs(data);
    };

    fetchData();
  }, []);

  console.log(jobs);

  return (
    <section className="jobs-list">
      {jobs.map((job) => {
        return <JobShow data={job} />;
      })}
    </section>
  );
}
