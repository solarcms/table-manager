/**
 * Created by n0m4dz on 1/10/16.
 */
import createReducer from '../lib/createReducer'
import Immutable from 'immutable'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    'tables': []
};

export default createReducer(initialState, {
    [ActionTypes.GET_TABLES](state, {data}){
        state = state.set('tables', Immutable.fromJS(data));
        return state;
    }
});

//export default createReducer(initialState, {
//    [ActionTypes.ADD_TABLE](state, {data}){
//        state = state.set('modalFormData', Immutable.fromJS(data));
//        return state;
//    }
//});
