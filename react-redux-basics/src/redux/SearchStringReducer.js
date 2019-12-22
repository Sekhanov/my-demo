
export default function searchStringReducer(state = {searchString: 'qwer'} , action) {
    switch (action.type) {
        case "SEARCH_STRING":
            return action.payload; 
        default:
            return state;
    }
}


