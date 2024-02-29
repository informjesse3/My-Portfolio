import React, { Component } from "react";

class FormAnime extends Component {
  componentDidMount() {
    // Load the Visme forms embedding script
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <>
        <div
          className="visme_d"
          data-title="Untitled Project"
          data-url="z4rw8mm9-untitled-project"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="25052"
        ></div>
      </>
    );
  }
}

export default FormAnime;
