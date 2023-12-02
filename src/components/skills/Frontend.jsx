import React from 'react'
import skillsData from "./skillsData.json"
function Frontend() {
    const splitSkills = Math.ceil(skillsData.skills.length / 2);
  const firstColumn = skillsData.skills.slice(0, splitSkills);
  const secondColumn = skillsData.skills.slice(splitSkills);

  return (
    <div className="skills__content">
      <div className="skills__box">
        <div className="skills__group">
          {firstColumn.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                {/* <span className="skills__level">{skill.level}</span> */}
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {secondColumn.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                {/* <span className="skills__level">{skill.level}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Frontend