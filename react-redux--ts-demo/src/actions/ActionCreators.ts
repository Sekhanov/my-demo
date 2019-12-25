import Person from "../data/Person";

import { PersonsAction } from "./ActionTypes";
import { PERSON_DATA } from "../constant/constants";

export const PersonsActionCreator = (person: Person[]): PersonsAction => ({
    type: PERSON_DATA,
    payload: person
})