import React, { Component } from 'react';

class Searchbar extends Component {

    constructor(props) {
        super(props); 
            this.state = {
                value: "",
            };

            // this.handleChange = this.handleChange.bind(this);
            // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(event.target.value);

        if (event.target.value === "") {
            this.props.handleReset()
            console.log('none')
        }
    }

    
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.value !== "") {
            this.props.handleFilter(this.state.value)
        }
        console.log(this.state.value);

        // if (this.state.value === "") {
        //     this.props.handleReset()
        //     console.log('none')
        // }
    }

    render () {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.value} onChange={this.handleChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Searchbar;