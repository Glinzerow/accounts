import React from "react";
import AccountForm from "./AccountForm"
import PersonItem from "./PersonItem";

export default class AccountList extends React.Component {
    
    state = {
        persons: [],
        accountRequest: 0,
        itemOnChange: false,
        itemIdOnChange: 0,
    };
    
    addPerson = (person) => {
        this.setState({
            persons: [person, ...this.state.persons]
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    

    render(){

        let persons = [];

        if (this.state.accountRequest) {
            persons = this.state.persons.filter(person => person.person.hasEnoughSavings(this.state.accountRequest))
        } else {
            persons = this.state.persons;
        }

        return (
            <div>
                <AccountForm onSubmit={this.addPerson} />
                {persons.map(person => (
                    <PersonItem
                        key={person.id}
                        givePaycheck={() => person.person.givePaycheck()}
                        person={person.person}
                        state={this.state}
                        changeDetails={() => this.setState({
                            itemOnChange: true,
                            itemIdOnChange: person.id
                        }) }
                    />    
                ))}
                
                <div>
                    <label>Show accounts with higher balance than:
                    <input 
                        name="accountRequest"
                        value={this.state.accountRequest}
                        onChange={this.handleChange}
                        Placeholder="EnterAmount..."
                        /> 
                    </label>   
                </div>
            </div>


                
                
        );
    }
}