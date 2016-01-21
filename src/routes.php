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
    Route::post('solartables/setprops', ['as' => 'table.solar.setprops', 'uses' => 'TableManagerController@setTableProps']);


    Route::get('fields/{table}', ['as' => 'columns', 'uses' => 'TableManagerController@getFields']);
    Route::post('columns/update', ['as' => 'columns.update', 'uses' => 'TableManagerController@updateColumns']);
});
