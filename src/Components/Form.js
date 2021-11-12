import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      select: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });

    console.log(this.state.userName);
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });

    console.log(this.state.comments);
  };

  handleSelectChange = (event) => {
    this.setState(
      {
        select: event.target.value,
      },
      () => console.log(this.state.select)
    );
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.select}`);
    event.preventDefault();
  };

  render() {
    const { userName, comments, select } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Comment</label>
          <input
            type="textarea"
            value={comments}
            onChange={this.handleCommentChange}
          />
        </div>
        <div>
          <label>Select</label>
          <select value={select} onChange={this.handleSelectChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
