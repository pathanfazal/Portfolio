import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills"><h2>Skills</h2>
    <div className="content_skill" >

        <div className='skillz'>
          <h3>Soft Skills</h3>
          <li>Observation</li>
          <li>Decision making</li>
          <li>Problem Solving</li>
          <li>Multi-tasking</li>
          <li>Teamwork</li> 
        </div>
        <div className='skillz'>
          <h3>Hard Skills</h3>
          <li>React</li>
          <li>Computer Networks</li>
          <li>Data Structure</li>
        </div>
        <div className='skillz'>
        <h3>Technical Skills</h3>
          <li>C++</li>
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
        </div>
      </div>
    </section>
  )
}

export default Skills