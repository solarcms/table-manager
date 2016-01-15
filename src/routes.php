<?php

Route::group([
    'namespace' => 'Solarcms\Core\TableManager\Controllers',
    'prefix' => 'solar/tablemanager',
    'as' => 'Solar.TableManager::',
    'middleware' => 'auth'], function () {

    Route::get('/', ['as' => 'index', 'uses' => 'TableManagerController@index']);

    Route::get('tables', ['as' => 'tables', 'uses' => 'TableManagerController@getTables']);
    Route::post('tables/add', ['as' => 'table.add', 'uses' => 'TableManagerController@addTable']);
    Route::get('table/remove/{id}', ['as' => 'table.add', 'uses' => 'TableManagerController@removeTable']);

    Route::get('solartables', ['as' => 'tables.solar', 'uses' => 'TableManagerController@getTablesProps']);


    Route::get('fields/{table}', ['as' => 'tables', 'uses' => 'TableManagerController@getFields']);
});
