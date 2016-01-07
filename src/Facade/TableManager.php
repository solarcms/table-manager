<?php
namespace Solarcms\Core\TableManager\Facade;
use Illuminate\Support\Facades\Facade;

/**
 * Created by PhpStorm.
 * User: n0m4dz
 * Date: 1/5/16
 * Time: 7:40 PM
 */
class TableManager extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'TableManager';
    }
}