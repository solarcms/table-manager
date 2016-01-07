<?php

namespace Solarcms\Core\TableManager;

use Illuminate\Support\ServiceProvider;

/**
 * Created by PhpStorm.
 * User: n0m4dz
 * Date: 1/5/16
 * Time: 7:38 PM
 */
class TableManagerServiceProvider extends ServiceProvider
{


    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        // Route
        include __DIR__ . DIRECTORY_SEPARATOR . 'routes.php';

        // For publishin config file
        $this->publishes([
            __DIR__.'/Config/tm_config.php' => config_path('tm_config.php'),
        ], 'tmconfig');

        // For publishing assets
        $this->publishes([
            __DIR__ . DIRECTORY_SEPARATOR . 'Assets'. DIRECTORY_SEPARATOR . 'dist' => public_path('assets'. DIRECTORY_SEPARATOR .'tm'),
        ], 'shared');
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        // TODO: Implement register() method.
        // View
        $this->loadViewsFrom(__DIR__ . DIRECTORY_SEPARATOR . 'Views', 'TableManager');

        $this->app['TableManager'] = $this->app->share(function ($app) {
            return new TableManager;
        });
    }
}