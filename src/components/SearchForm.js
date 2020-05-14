import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value,
        });
    }

    render() {
        return (
          <form onSubmit={this.props.handleClick}>
            <label>
              Search:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}