/**
 * Created by n0m4dz on 1/16/16.
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
