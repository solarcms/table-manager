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
        //Setting table defaults
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


            //Setting field defaults
            $columns = Schema::getColumnListing($data[$i]);

            foreach ($columns as $c) {
                $parent = $data[$i];
                DB::table('solar_table_columns')->insert([
                    'table' => $parent,
                    'column' => $c
                ]);
            }
        }

        return response()->json(['status' => true]);
    }

    public function removeTable($id)
    {
        $table = DB::table('solar_tables')->where('id', $id)->get();
        $table = $table[0]->name;

        $r = DB::table('solar_tables')->where('id', $id)->delete();
        if ($r) {
            DB::table('solar_table_columns')->where('table', $table)->delete();
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

    public function setTableProps(Request $request)
    {
        $tables = $request->input('data');
        foreach ($tables as $t) {
            $permission = json_encode([
                'c' => $this->getBool($t['permission']['c']),
                'r' => $this->getBool($t['permission']['r']),
                'u' => $this->getBool($t['permission']['u']),
                'd' => $this->getBool($t['permission']['d'])
            ]);

            DB::table('solar_tables')->where('id', $t['id'])->update([
                'permission' => $permission,
                'form_type' => $t['form_type']
            ]);
        }
        return response()->json(['status' => true]);
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
            $columns = DB::table('solar_table_columns')->where('table', $table)->get();
            return response()->json($columns);

        }
    }


    /**
     * @param Request $request
     */
    public function updateColumns(Request $request)
    {
        $columns = $request->input('data');
//        print_r($columns);
        foreach ($columns as $c) {
            DB::table('solar_table_columns')->where('table', $c['table'])->where('column', $c['column'])->update([
                'column_type' => $c['column_type'],
                'validation' => json_encode($c['validation']),
                'default_value' => $c['default_value'],
                'is_translatable' => $this->getBool($c['is_translatable']),
                'is_filter' => $this->getBool($c['is_filter']),
                'is_sortable' => $this->getBool($c['is_sortable']),
                'is_grid_fixed' => $this->getBool($c['is_grid_fixed']),
                'is_grid_enabled' => $this->getBool($c['is_grid_enabled']),
                'is_form_enabled' => $this->getBool($c['is_form_enabled'])
            ]);
        }

        return response()->json(['status' => true ]);
    }

    /**
     * @param $boolStr
     * @return bool
     */
    public function getBool($boolStr)
    {
        if ($boolStr == 'true' || $boolStr == 1) {
            return true;
        } else {
            return false;
        }
    }

}
