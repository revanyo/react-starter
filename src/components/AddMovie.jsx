import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
        
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    handleClick() {
        this.props.handleAddMovie(this.state.value);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ this.handleChange } />
                <input className = 'addMovieInput'
                     type="button"
                     value="Add Movie"
                     onClick={this.handleClick}
                />
            </div>
        );
    }

}

export default AddMovie