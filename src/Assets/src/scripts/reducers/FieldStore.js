/**
 * Created by n0m4dz on 1/17/16.
 */
import createReducer from '../lib/createReducer'
import Immutable from 'immutable'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    'fields': [],
    'fieldProps': []
};

export default createReducer(initialState, {
    [ActionTypes.GET_FIELDS](state, {data}){
        state = state.set('fields', Immutable.fromJS(data));
        return state;
    },

    [ActionTypes.UPDATE_FIELD_PROPS](state, {index, key, value}){
        //console.log(index + ' - ' + key + ' - ' + value);
        var item = state.getIn(['fields', index]);
        var itemObj = item.toJS();
        itemObj[key] = value;
       // console.log(itemObj);
        state = state.setIn(['fields', index], Immutable.fromJS(itemObj));
        return state;
    }
});
