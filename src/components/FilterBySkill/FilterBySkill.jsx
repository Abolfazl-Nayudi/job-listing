import React from 'react';
import './FilterBySkill.css';
import RemoveIcon from '../../assets/images/removeIcon.svg';
import JobContext from '../../contexts/JobContext';
import { useContext } from 'react';
export default function FilterBySkill({ skill }) {
  const { dispatch } = useContext(JobContext);

  const handleClick = (e) => {
    dispatch({ type: 'job/removeFilterCriteria', payload: skill });
  };

  return (
    <div className="filter-criteria">
      <span className="criteria">{skill}</span>
      <span className="remove-icon" onClick={handleClick}>
        <img src={RemoveIcon} alt="" />
      </span>
    </div>
  );
}
