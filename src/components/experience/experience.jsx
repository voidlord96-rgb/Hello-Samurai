import "./experience.css";

import arrow from "../img/arrow.svg";

const experiences = [
  {
    date: "16th july 2021 - 16th aug 2021",
    position: "WEB-DEV intern",
    company: "some company some some",
    description:
      "Worked with the web dev team on internal projects involving the usage of languages like HTML, CSS, JS and Php with Bootstrap",
  },
];

function Experience() {
  return (
    <section className="experience">
      <h2 className="experience__title">work experience</h2>

      {experiences.map((experience) => (
        <div className="experience__wrapper" key={experience.date}>
          <p className="experience__date">{experience.date}</p>

          <div className="experience__content">
            <img
              src={arrow}
              alt="company image 1"
              className="experience__image"
            />

            <img
              src={arrow}
              alt="company image 2"
              className="experience__image"
            />

            <h3 className="experience__position">
              {experience.position}
            </h3>

            <h3 className="experience__company">
              {experience.company}
            </h3>

            <p className="experience__description">
              {experience.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;

