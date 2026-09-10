import "./project.css";
import pic from "../img/Group 9.png";

const projects = [
  {
    title: "DOC-UDI",
    image: pic,
    imageAlt: "DOC-UDI preview",
    description:
      "doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A doc-udi is A",
    technologies: "Made using Flutter, React, Nodejs, MongoDB, Python",
    link: "#",
  },
];

function Project() {
  return (
    <section className="project" id="projects">
      <h2 className="project__title">MY projects</h2>

      {projects.map((project) => (
        <div className="project__container" key={project.title}>
          <h3 className="project__subtitle">{project.title}</h3>

          <div className="project__content">
            <div className="project__image-wrapper">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="project__image"
              />
            </div>

            <p className="project__description">
              {project.description}
              <br />
              <br />
              {project.technologies}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;
