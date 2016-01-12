/**
 * Created by n0m4dz on 1/10/16.
 */
import {getTables} from '../api/'
import * as ActionTypes from '../constants/ActionTypes'

export function getTable(data) {
    return {
        type: ActionTypes.GET_TABLES,
        data
    }
}

export function addTable(tables){
    return{
        type:ActionTypes.ADD_TABLE,
        tables
    }
}

export function setTableProps(data){
    return {
        type: ActionTypes.SET_TABLE_PROPS,
        data
    }
}

