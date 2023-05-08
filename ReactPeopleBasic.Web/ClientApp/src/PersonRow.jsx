import React from 'react'

class PersonRow extends React.Component {
    render() {
        return (
            <tbody>
                {this.props.people.map(person => {
                    if (person.age > 65) {
                        return (<tr className='table-danger'>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                        </tr>)
                    }
                    else {
                        return (<tr>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                        </tr>)
                    }
                })}
            </tbody>)
    }
}
export default PersonRow;