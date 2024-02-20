import React from 'react';
import './FilterBySkill.css';
import SkillBtn from '../Skills/Skills';
import RemoveIcon from '../../assets/images/removeIcon.svg';

export default function FilterBySkill({ skill }) {
  return (
    <div className="filter-criteria">
      <span className="criteria">{skill}</span>
      <span className="remove-icon">
        <img src={RemoveIcon} alt="" />
      </span>
    </div>
  );
}
