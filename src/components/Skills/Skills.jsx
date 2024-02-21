import React from 'react';
import './Skills.css';
import { useContext } from 'react';
import JobContext from '../../contexts/JobContext';
export default function Skills({ skill }) {
  const { dispatch, state } = useContext(JobContext);

  const handleClick = (e) => {
    const isSkillExists = state.jobFilter.find(
      (skill) => skill === e.target.textContent
    );
    if (!isSkillExists) {
      dispatch({ type: 'job/add', payload: e.target.textContent });
    }
  };

  return (
    <button className="skill" onClick={handleClick}>
      {skill}
    </button>
  );
}
