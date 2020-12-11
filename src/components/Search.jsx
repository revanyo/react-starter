import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handSearchInputChange(event.target.value);
        this.setState({value: event.target.value});
        event.preventDefault();
      }
    
    handleSubmit(event) {
        event.preventDefault();
      }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>       
                <input type="text" value ={this.state.value} name="name" onChange = {this.handleChange} />
                <input type="submit" value="Go" />
            </form>
        );
    }

}

export default Search