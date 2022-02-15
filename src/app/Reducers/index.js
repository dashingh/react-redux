import ListItemReducer from './ListItemReducer';

import {combineReducers} from 'redux';

const AllReducers = combineReducers({
    itemlist : ListItemReducer,
   
})

export default AllReducers;