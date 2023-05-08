import React from 'react'
import PersonForm from './PersonForm'
import PersonRow from './PersonRow'

class PeopleTable extends React.Component {

    state = {
        currentFirstName: '',
        currentLastName: '',
        currentAge: '',
        people: []
    }

    onFirstNameTextChange = (e) => {
        this.setState({ currentFirstName: e.target.value })
    }

    onLastNameTextChange = (e) => {
        this.setState({ currentLastName: e.target.value })
    }

    onAgeTextChange = (e) => {
        this.setState({ currentAge: e.target.value })
    }

    onClearClick = () => {
        this.setState({ currentFirstName: '', currentLastName: '', currentAge: '', people: [] })
    }

    onAddClick = () => {
        const copy = [...this.state.people]
        copy.push({
            firstName: this.state.currentFirstName,
            lastName: this.state.currentLastName,
            age: this.state.currentAge
        })
        this.setState({ people: copy, currentFirstName: '', currentLastName: '', currentAge: '' })
    }

    render() {
        if (this.state.people.length === 0) {
            return (
                < div >
                    <PersonForm currentFirstName={this.state.currentFirstName}
                        currentLastName={this.state.currentLastName}
                        currentAge={this.state.currentAge}
                        onAddClick={this.onAddClick}
                        onClearClick={this.onClearClick}
                        onFirstNameTextChange={this.onFirstNameTextChange}
                        onLastNameTextChange={this.onLastNameTextChange}
                        onAgeTextChange={this.onAgeTextChange} />
                    <div className='offset-md-3 mt-5'>
                        <h1>No people added yet! Add some people!!</h1>
                    </div>
                </div>
            )
        }
        else {
            return (
                < div >
                    <PersonForm currentFirstName={this.state.currentFirstName}
                        currentLastName={this.state.currentLastName}
                        currentAge={this.state.currentAge}
                        onAddClick={this.onAddClick}
                        onClearClick={this.onClearClick}
                        onFirstNameTextChange={this.onFirstNameTextChange}
                        onLastNameTextChange={this.onLastNameTextChange}
                        onAgeTextChange={this.onAgeTextChange} />
                    <table className='table table-hover table-bordered table-striped mt-5'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                            <PersonRow people={this.state.people} />
                    </table>
                </div>
            )
        }

    }


}
export default PeopleTable;