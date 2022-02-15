

const ListItemReducer = (state = [],action) => {
    switch (action.type) {
        case "ADD_LIST":
            const newState = [...state,action.payload];
            return state = newState;
        case "REMOVE_ITEM":  
            // const removeState = [...state];
            // removeState.splice(action.payload,1);
            // Splice and filter both working can also be used
            const filteredList = state.filter((item,index) => index !== action.payload);
            return state = filteredList;
    
        default:
            return state;
    }

}
export default ListItemReducer;