import React from "react";
import data from "./data";
import "./projects.css";

const Project = () => {
  return (
    <div id="pro">
      <h1 className="section-header" style={{ "--x": "5%", "--y": "1rem" }}>
        Projects
      </h1>
      {data.map((project, index) => (
        <div className="project-container" key={index}>
          <div className="project-card">
            <h2 className="project-title">{project.title}</h2>
            {project.vidsrc && ( // Conditionally render the video element
              <video controls>
                <source src={project.vidsrc} type="video/mp4" />
              </video>
            )}

            <div className="pro-details">
              <p>{project.text}</p>
              <div className="pro-btns">
                <button className="btn">
                  <a href={project.source}>Source</a>
                </button>
                {project.view && ( // Conditionally render the "View" button
                  <button className="btn">
                    <a href={project.view}>View</a>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
