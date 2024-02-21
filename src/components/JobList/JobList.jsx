import './JobList.css';

import React, { useEffect, useState } from 'react';
import JobShow from '../JobShow/JobShow';
export default function JobList({ jobs }) {
  const { data } = jobs;
  return (
    <section className="jobs-list">
      {data.map((job, index) => {
        return <JobShow data={job} key={index} />;
      })}
    </section>
  );
}
