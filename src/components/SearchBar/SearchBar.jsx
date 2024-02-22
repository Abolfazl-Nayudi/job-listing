import React from 'react';
import FilterBySkill from '../FilterBySkill/FilterBySkill';
import { useContext } from 'react';
import JobContext from '../../contexts/JobContext';
import './SearchBar.css';

export default function SearchBar() {
  const { state, dispatch } = useContext(JobContext);

  const handleClearClick = (e) => {
    dispatch({ type: 'job/removeAllFilterCriteria' });
  };

  return (
    <section className="search-bar">
      <div>
        {state.jobFilter.map((job, index) => {
          return <FilterBySkill skill={job} key={index} />;
        })}
      </div>
      <div className="clear" onClick={handleClearClick}>
        clear
      </div>
    </section>
  );
}
