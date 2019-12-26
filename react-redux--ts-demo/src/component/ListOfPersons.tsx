import React from 'react'
import Person from '../data/Person'
import IGlobalState from '../store/IGlobalState'
import { connect } from 'react-redux'
import { persons } from '../mock/mockData';


interface IProps {
    persons : Person[];
    someString: string;
}


export class ListOfPersons extends React.Component<IProps> {
    

    render() {
        const personList = this.props.persons.map(person => 
            (<li key={person.age}>{person.surname}</li>)        
        )

        return ( 
            <ul>
                { personList }
                <p>{this.props.someString}</p>
            </ul>
            
        )
    }
}


const mapStateToProps = (state: IGlobalState) => ({
    persons: state.persons
})


export default connect(
    mapStateToProps
)(ListOfPersons)