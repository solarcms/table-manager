/**
 * Created by n0m4dz on 1/16/16.
 */
import {getRequest, postRequest} from './ajaxService'

export function getFields(tableName){
    return getRequest('fields/' + tableName);
}
