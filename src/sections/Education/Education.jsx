import React from 'react'
import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";
import EducationMileStone from "./EducationMileStone/EducationMileStone";
import './education.css'
import EducationData from "../../assets/Edu.json";

const Education = () => {
  const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.4);

  return (
    <section id="education"
      className="Education"
      name="Education"
      ref={sectionRef}
    >
      <h1 className="section-header" style={{ "--x": "5%", "--y": "1rem" }}>
        Education
      </h1>
      <div className="timeline">
        <ul>
          {EducationData &&
            EducationData.milestones.map((milestone) => <EducationMileStone key={milestone.title} milestone={milestone} />)}

            {/* The below is used to clear the flot from both the sides */}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </section>
  );
};

export default Education;
