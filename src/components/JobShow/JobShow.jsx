import './JobShow.css';
import React from 'react';
import Skills from '../Skills/Skills';
import inuser from '../../assets/images/insure.svg';
export default function JobShow({ data }) {
  const skills = [data.role, data.level, ...data.tools, ...data.languages];
  return (
    <div className="card">
      <div className="body">
        <div className="logo">
          <img src={inuser} alt="" />
        </div>
        <div className="details">
          <div className="company">
            <span className="company-name">{data.company}</span>
            {data.new && <span className="new">NEW!</span>}
            {data.featured && <span className="feature">FEATURED</span>}
          </div>
          <h3>{data.position}</h3>
          <div className="time">
            <span>{data.postedAt}</span>.<span>{data.contract}</span>.
            <span>{data.location}</span>
          </div>
        </div>
      </div>
      <div className="skill-boxes">
        {skills.map((skill, index) => {
          return <Skills skill={skill} key={index} />;
        })}
      </div>
    </div>
  );
}
