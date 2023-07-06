import React from 'react'
import './styles/Work.scss'
import { IWork, WorkExperience } from '../const/workExperience'

interface ExperienceProps {
  description: IWork['description'][0]
}
const Experience = ({ description }: ExperienceProps) => {
  return (
    <div className="experience">
      <span className="project">{description.project}</span>
      <ul className="explain-wrapper">
        {description.explain.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </div>
  )
}
const Work = () => {
  return (
    <div className="work-container">
      <h2>WORK Experience</h2>
      <div className="work-content">
        <div className="period">{WorkExperience.period}</div>
        <div className="overall">
          <span className="compony">{WorkExperience.compony}</span>
          <span className="job">{WorkExperience.job}</span>
          <div className="tool">
            {WorkExperience.tech.map((tech) => (
              <span key={tech} className="tool-item indigo">
                {tech}
              </span>
            ))}
          </div>
          <div className="experience-wrapper">
            {WorkExperience.description.map((item) => (
              <Experience key={item.project} description={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
