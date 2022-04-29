import { Component } from "react";
import "../css/FollowComponent.css";

class Follow extends Component {
  openLink(social) {
    window.open(social.link, "_blank");
  }
  render() {
    return (
      <section id="follow">
        <div className="container text-center">
          <h4>Follow me on:</h4>
        </div>
        <br />
        <div className="container horizontal-links">
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.github.image}
            alt="GitHub"
            onClick={() =>
              this.openLink(this.props.details.profile_links.github)
            }
          />
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.linkedin.image}
            alt="LinkedIn"
            onClick={() =>
              this.openLink(this.props.details.profile_links.linkedin)
            }
          />
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.email.image}
            alt="Email"
            onClick={() =>
              this.openLink(this.props.details.profile_links.email)
            }
          />
        </div>
      </section>
    );
  }
}

export default Follow;
