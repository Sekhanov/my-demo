import React from 'react'
import Person from '../data/Person'

interface IProps {
    persons : Person[];
    someString: string;
}


export default class ListOfPersonsWithoutRedux extends React.Component<IProps> {
    

    render() {
        const personList = this.props.persons.map(person => 
            (<li key={person.age}>name: {person.name} surname: {person.surname}</li>)        
        )

        return ( 
            <ul>
                { personList }
                <p className="ss"> {this.props.someString} </p>
            </ul>
            
        )
    }
}

