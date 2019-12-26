import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mockStoreData, persons } from '../mock/mockData';
import { shallow, mount } from 'enzyme';
import App from '../App';
import {ListOfPersons} from './ListOfPersons';


// следующие 3 строки необходимы для конфигурации энзима
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const mockStoreCreator = configureStore();
let mockStore = mockStoreCreator(mockStoreData);

// it('enzyme test with mock store', () => {
//     const wrapper = mount(<Provider store={store}>
//         <App>            
//         </App>
//     </Provider>);
//     console.log(`######## ${wrapper.find(Provider).prop('store')}`)
//     expect(wrapper.find(ListOfPersons).prop('persons')).toEqual(persons);
// })

it('enzyme test with mock store', () => {
    const wrapper = mount(<Provider store={mockStore}>
        <App>            
        </App>
    </Provider>);
    console.log(`######## ${wrapper.find(ListOfPersons).prop('someString')}`)
    expect(wrapper.find(ListOfPersons).prop('someString')).toEqual("some string form react props");
})

it('enzyme test', () => {
    const component = shallow(<ListOfPersons
        someString="1"
        persons={persons}
    >        
    </ListOfPersons>)
    console.log(`######## ${component.prop('someString')}`)
    expect(component.find(".ss").text()).toEqual("1");
})