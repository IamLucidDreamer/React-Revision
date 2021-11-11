import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a. {this.props.hero}
      </h1>
    );
  }
}
