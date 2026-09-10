import { useState } from "react";
import "./skills.css";

const skills = [
  {
    title: "full-stack dev",
    items: ["node js", "react js", "html CSS js"],
  },
  {
    title: "designing",
    items: ["graphic designing", "ui/ux designing", "video editing"],
  },
  {
    title: "problem solving",
    items: ["c++", "java"],
  },
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">MY SKILLS</h2>

      <div className="skills__container container">
        {skills.map((skill, index) => (
          <div
            className={`skills__item ${
              activeSkill === skill.title ? "skills__item--active" : ""
            }`}
            key={skill.title}
            style={{ "--delay": `${index * 0.2}s` }}
            onMouseEnter={() => setActiveSkill(skill.title)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <h3 className="skills__subtitle">{skill.title}</h3>

            <ul className="skills__list">
              {skill.items.map((item) => (
                <li className="skills__list-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
