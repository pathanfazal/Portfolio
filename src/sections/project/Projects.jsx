import React from 'react'
import './projects.css'
import data from './data'

const Projects = () => {
  return (
    <section id="projects"><h2>Projects</h2>
    <div className="project_container">
    {
      data.map(item=>(
        <li key={item.id} className='description'>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
          <a href={item.link}>
          {item.icon}</a>
          </li>
      ))
    }
    </div>
    </section>
  )
}

export default Projects