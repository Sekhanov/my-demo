import { persons } from "../data/Persons";

export default function processDataReducer(state = { data: persons }, action) {
    switch (action.type) {
        case 'PROCESS_DATA':
            return action.payload;
        default:
            return state;
    }   
}