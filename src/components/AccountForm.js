import React from "react";
import Person from "./Person.js";
import shortid from "shortid";

export default class AccountForm extends React.Component {
    state = {
        person_name : "",
        person_age: Int8Array
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            person : new Person(this.state.person_name,
            this.state.person_age)
        })
        this.setState({
            person_name : "",
            person_age: Int8Array
        })
    }



    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input
                        name="person_name"
                        value={this.state.person_name}
                        onChange={this.handleChange}
                        placeholder="Name..."
                    />
                </label>
                <label>Age:
                    <input
                        name="person_age"
                        value={this.state.person_age}
                        onChange={this.handleChange}
                        placeholder="Age..."
                    />
                </label>
                <button onClick={this.handleSubmit}> add Account</button>
            </form>
            
        );
    }
}