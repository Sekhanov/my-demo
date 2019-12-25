import React from 'react'
import Person from '../data/Person'
import IGlobalState from '../store/IGlobalState'
import { connect } from 'react-redux'
import { Persons } from '../mock/mockData';


interface IProps {
    persons : Person[];
}


export class PersonList extends React.Component<IProps> {
    

    render() {
        const personList = this.props.persons.map(person => 
            (<li key={person.age}>name: {person.name} surname: {person.surname}</li>)        
        )

        return ( 
            <ul>
                { personList }
            </ul>

        )
    }
}


const mapStateToProps = (state: IGlobalState) => ({
    persons: state.persons
})


export default connect(
    mapStateToProps
)(PersonList)