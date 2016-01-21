/**
 * Created by n0m4dz on 1/10/16.
 */
import {getTables} from '../api/tableApi'
import * as ActionTypes from '../constants/ActionTypes'

export function getTable(data) {
    return {
        type: ActionTypes.GET_TABLES,
        data
    }
}

export function addTable(tables) {
    return {
        type: ActionTypes.ADD_TABLE,
        tables
    }
}

export function removeTable(data) {
    return {
        type: ActionTypes.REMOVE_TABLE,
        data
    }
}

export function getTableProps(data) {
    return {
        type: ActionTypes.GET_TABLE_PROPS,
        data
    }
}

export function setTableProps(data) {
    return {
        type: ActionTypes.SET_TABLE_PROPS,
        data
    }
}

export function updateTableProps(index, key, value){
    return{
        type: ActionTypes.UPDATE_TABLE_PROPS,
        index: index,
        key: key,
        value: value
    }
}

export function updateTypeProps(index, value){
    return{
        type: ActionTypes.UPDATE_TYPE_PROPS,
        index: index,
        value: value
    }
}



