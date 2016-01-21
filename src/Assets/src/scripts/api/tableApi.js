/**
 * Created by n0m4dz on 1/10/16.
 */
import {getRequest, postRequest} from './ajaxService';

export function getTables(){
    return getRequest('tables');
}

export function addTable(tables){
    return postRequest('tables/add', {'data' : tables});
}

export function removeTable(id){
    return getRequest('table/remove/' + id)
}

export function getTableProps(){
    return getRequest('solartables');
}

export function setTableProps(data){
    return postRequest('solartables/setprops', {'data': data})
}
