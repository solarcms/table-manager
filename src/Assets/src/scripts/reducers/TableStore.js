/**
 * Created by n0m4dz on 1/10/16.
 */
import createReducer from '../lib/createReducer'
import Immutable from 'immutable'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    'tables': [],
    'tableProps': []
};

export default createReducer(initialState, {
    [ActionTypes.GET_TABLES](state, {data}){
        state = state.set('tables', Immutable.fromJS(data));
        return state;
    },

    [ActionTypes.GET_TABLE_PROPS](state, {data}){
        state = state.set('tableProps', Immutable.fromJS(data));
        return state;
    },

    [ActionTypes.REMOVE_TABLE](state, {data}){
        state = state.set('tableProps', Immutable.fromJS(data));
        return state;
    }
});

//export default createReducer(initialState, {
//    [ActionTypes.ADD_TABLE](state, {data}){
//        state = state.set('modalFormData', Immutable.fromJS(data));
//        return state;
//    }
//});
