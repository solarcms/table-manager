/**
 * Created by n0m4dz on 10/20/15.
 */

var Path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TimestampWebpackPlugin = require('timestamp-webpack-plugin');

var webpackDirs = {
    contextDir: Path.resolve(__dirname, './src/scripts'),
    sassDir: Path.resolve(__dirname, './src/scss'),
    pathDir: Path.join(Path.resolve(__dirname, './dist/')),
    nodeDir: Path.join(Path.resolve(__dirname, './node_modules')),
    logsDir: Path.join(Path.resolve(__dirname, './logs')),
    excludeDir: [/(node_modules|tests|logs)/]
};

module.exports = {
    conf: {
        excludeDir: webpackDirs.excludeDir
    },

    context: webpackDirs.contextDir,

    entry: {
        app: ['./index']
    },

    output: {
        path: webpackDirs.pathDir,
        filename: 'js/[name].js',
        publicPath: '../'
    },


    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin(),

        //Chunk css
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        }),

        //Timestamp for webpack
        new TimestampWebpackPlugin({
            path: webpackDirs.logsDir,
            filename: 'webpack.timestamp.log'
        }),

        new Webpack.BannerPlugin("*************************************\n   Author Tseegii Tselmeg   \n*************************************\n")
    ],

    module: {
        loaders: [
            //SCRIPTS
            {
                test: /\.js$/,
                exclude: webpackDirs.excludeDir,
                loader: 'babel',
                query:{
                    presets: ['es2015', 'react']
                }
            },

            //SCSS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
            },

            // IMAGES
            {
                test: /\.png($|\?)|\.jpg($|\?)|\.gif($|\?)|\.bmp($|\?)|\.svg($|\?)/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            },

            // FONTS
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
        ]
    },
    sassLoader: {
        includePaths: webpackDirs.sassDir
    },

    resolve: {
        root: [webpackDirs.pathDir],
        alias: {},
        extensions: ['', '.js', '.scss', '.css', '.html']
    }
};
