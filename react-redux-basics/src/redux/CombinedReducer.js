import {combineReducers} from 'redux';
import processDataReducer from './ProcessDataReducer';
import searchStringReducer from './SearchStringReducer';



export default combineReducers(
    {
        processDataReducer: processDataReducer,
        searchStringReducer: searchStringReducer
        }
    
)