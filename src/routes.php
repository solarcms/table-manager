<?php

Route::group([
    'namespace' => 'Solarcms\Core\TableManager\Controllers',
    'prefix' =>'solar/tablemanager',
    'as' => 'Solar.TableManager::',
    'middleware' => 'auth'], function() {

    Route::get('/', [ 'as' => 'index', 'uses' => 'TableManagerController@index']);

});