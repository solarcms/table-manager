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

        $excludeArr = Config::get('tm_config.exclude');
        $alreadyTables = DB::table('solar_tables')->select('name')->get();

        foreach ($alreadyTables as $table) {
            array_push($excludeArr, $table->name);
        }

        $tableArr = [];


        foreach ($tables as $table) {
            $table = get_object_vars($table);
            $value = array_pop($table);
            if (!in_array($value, $excludeArr)) {
                array_push($tableArr, $value);
            }
        }
        return response()->json($tableArr);
    }

    public function addTable(Request $request)
    {

        $table = [];

        $permission = json_encode([
            'c' => false,
            'r' => false,
            'u' => false,
            'd' => false,
        ]);
        $form_type = 'page';

        $data = $request->input('data');

        for ($i = 0; $i < count($data); $i++) {
            DB::table('solar_tables')->insert([
                'name' => $data[$i],
                'permission' => $permission,
                'form_type' => $form_type
            ]);
        }
    }

    public function removeTable($id)
    {
        $r = DB::table('solar_tables')->where('id', $id)->delete();
        if ($r) {
            return response()->json(['status' => true]);
        } else {
            return response()->json(['status' => false]);
        }
    }

    public function getTablesProps()
    {
        $tables = DB::table('solar_tables')->get();
        foreach ($tables as $table) {
            $table->permission = json_decode($table->permission);
        }
        return response()->json($tables);
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
