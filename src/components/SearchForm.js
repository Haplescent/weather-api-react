import React from "react";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let eventObject = event.target.getAttribute("value");
    console.log("handleSubmit is working");
    console.log(eventObject);
    this.setState({ value: "" });
    this.props.handleClick(eventObject);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} value={this.state.value}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
