/**
 * Created by n0m4dz on 1/10/16.
 */
import $ from 'jquery';

export function getRequest(url){
    return $.ajax({
        url: url,
        type: 'GET'
    })
}

export function postResuest(url, data) {
    return $.ajax({
        url: url,
        type: 'POST',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data:data
    })
}


export function getTables(){
    return getRequest('tables');
}

export function addTable(tables){
    return postResuest('tables/add', {'data' : tables});
}

export function setTableProps(data){
    return "Aaa"
}
