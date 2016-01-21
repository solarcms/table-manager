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
    },

    [ActionTypes.UPDATE_TABLE_PROPS](state, {index, key, value}){
        var item = state.getIn(['tableProps', index]);
        var itemObj = item.toJS();
        itemObj.permission[key] = value;
        state = state.setIn(['tableProps', index], Immutable.fromJS(itemObj));
        return state;
    },

    [ActionTypes.UPDATE_TYPE_PROPS](state, {index, value}){
        var item = state.getIn(['tableProps', index]);
        var itemObj = item.toJS();
        itemObj.form_type = value;
        state = state.setIn(['tableProps', index], Immutable.fromJS(itemObj));
        console.log(state.toJS());
        return state;
    }
});

//export default createReducer(initialState, {
//    [ActionTypes.ADD_TABLE](state, {data}){
//        state = state.set('modalFormData', Immutable.fromJS(data));
//        return state;
//    }
//});
