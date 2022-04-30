import { Component } from "react";
import "../css/ProjectComponent.css";
class Projects extends Component {
  onProjectClicked(id) {
    var projObj = this.props.details.projects.filter(
      (project) => project.id === id
    )[0];
    window.open(projObj.link, "_blank");
  }

  openProjectsURL() {
    window.open(this.props.details.profile_links.github.link, "_blank");
  }

  render() {
    const projects = this.props.details.projects.map((project) => {
      return (
        <div key={project.id} className="row" style={{ marginTop: "30px" }}>
          <div className="col-12 col-sm-6" style={{ textAlign: "center" }}>
            <img
              src={project.image}
              alt={project.title}
              width="300px"
              height="200px"
              style={{ margin: "auto" }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <h4>{project.title}</h4>
            <p className="text-justify">{project.description.para1}</p>
            <p className="text-justify">{project.description.para2}</p>
            <button
              className="view-projects--specs"
              onClick={() => this.onProjectClicked(project.id)}
            >
              View Project
            </button>
            {/* <button className="view-projects--code">
              <img height="20px" src="assets/images/github.svg" alt="Github" />
            </button> */}
            
              <a className="view-projects--code" href={project.code_link} target="_blank"><img height="30px" marginTop="0px" src="assets/images/github.svg" alt="Github" /></a>
            
            
          </div>
        </div>
      );
    });

    return (
      <section id="projects">
        <div className="container">
          <h2 className="text-center">Projects</h2>
          {projects}
        </div>
      </section>
    );
  }
}

export default Projects;
