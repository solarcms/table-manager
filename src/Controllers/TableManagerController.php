<?php

namespace Solarcms\Core\TableManager\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Solarcms\Core\TableManager\TableManager;

class TableManagerController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('TableManager::index');
    }


    /**
     * @return database table names as json
     */
    public function getTables()
    {
        $tables = DB::select(DB::raw('SHOW TABLES'));
        $tableArr = [];
        $excludeArr = Config::get('tm_config.exclude');
        foreach ($tables as $table) {
            $table = get_object_vars($table);
            $value = array_pop($table);
            if (!in_array($value, $excludeArr)) {
                array_push($tableArr, $value);
            }
        }
        return response()->json($tableArr);
    }

    public function addTable(Request $request){

        $table = [];

        $permission = [
            'c' => false,
            'r' => false,
            'u' => false,
            'd' => false,
        ];
        $form_type = 'page';

        $data = $request->input('data');

        for($i = 0; $i<count($data); $i++){
            echo $data[$i] ."\n";
        }
    }

    public function getEnabledTables(){
        $tables = DB::table('solar_tables')->get();
        dump($tables);
    }


    /**
     * @param string $table name
     * @return table columns as json
     */
    public function getFields($table = false)
    {
        if ($table === false) {
            return response()->json(['status' => false, 'msg' => 'no table selected']);
        } else {
            if (Schema::hasTable($table)) {
                $columns = Schema::getColumnListing($table);
                return response()->json($columns);
            } else {
                return response()->json(['status' => false, 'msg' => 'table is not existed']);
            }
        }
    }

}
