import Person from "../data/Person";



interface IAction<T, P> {
    type: T;
    payload: P;
}


export type PersonsAction = IAction<string, Person[]> 