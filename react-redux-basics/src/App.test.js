import { processDataActionProducer } from "./redux/ActionProducers";
import { persons } from "./data/Persons";
import processDataReducer from "./redux/ProcessDataReducer";

const sum = (a, b) => (a + b)

describe('my test', () => {
    it('fist test', () => {
        expect(sum(1, 5)).toEqual(6);
    }),
    it('second test', () => {
        expect(true).toBeTruthy
    })
    it('ProcessDataProducer', () => {
        const processDataAction = {
            type: 'PROCESS_DATA',
            payload: [1, 2]
        }
        expect(processDataReducer(persons, processDataAction)).toEqual([1, 2])
    })
})





