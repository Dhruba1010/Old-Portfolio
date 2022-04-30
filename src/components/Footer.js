import { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer text-center">
        <p className="text-color">
          Credit goes to {" "}
          <a
            className="text-color"
            href={this.props.details.profile_links.creater_github.link}
          >
            Vaidhyanathan S M
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
