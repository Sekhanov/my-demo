import {combineReducers} from 'redux';
import processDataReducer from './ProcessDataReducer';
import searchStringReducer from './SearchStringReducer';



export  const combinedReducers = combineReducers(
    {
        data: processDataReducer,
        searchString: searchStringReducer
        }
    
)