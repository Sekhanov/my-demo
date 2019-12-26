import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mockStoreData, persons } from '../mock/mockData';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { ListOfPersons } from './ListOfPersons';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockStoreCreator = configureStore();
let mockStore = mockStoreCreator(mockStoreData);

it('enzyme test', () => {
    const wrapper = mount(<Provider store={mockStore}>
        <App>            
        </App>
    </Provider>);
    expect(wrapper.find(ListOfPersons).prop('persons')).toEqual(persons);
})