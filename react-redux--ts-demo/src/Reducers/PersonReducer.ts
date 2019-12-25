import Person from "../data/Person";
import { PersonsAction } from "../actions/ActionTypes";
import { PERSON_DATA } from "../constant/constants";
import { Persons } from "../mock/mockData";


const person = new Person('qwre', 'qwer', 1)


export const PersonReducer = (state: Person[] = Persons, action: PersonsAction): Person[] => {
    switch (action.type) {
        case PERSON_DATA:
           return  action.payload
        default:
            return state;
    }
}