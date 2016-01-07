<?php

namespace Solarcms\Core\TableManager\Controllers;

use App\Http\Controllers\Controller;
use Solarcms\Core\TableManager\TableManager;

class TableManagerController extends Controller {

    public function index() {
        return view('TableManager::index');
    }

}