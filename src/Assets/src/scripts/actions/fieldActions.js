/**
 * Created by n0m4dz on 1/17/16.
 */
import {getTables} from '../api/fieldApi'
import * as ActionTypes from '../constants/ActionTypes'

export function getFields(data) {
    return {
        type: ActionTypes.GET_FIELDS,
        data
    }
}

export function updateFieldProps(index, key, value) {
    return {
        type: ActionTypes.UPDATE_FIELD_PROPS,
        index: index,
        key: key,
        value: value
    }
}
