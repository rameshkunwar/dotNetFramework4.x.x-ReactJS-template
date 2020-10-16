const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Use this if your domain name has path. Example, www.example.com/myapp
//This will inject correct path of scripts in _Layout.cshtml via _Layout_Template.cshtml otherwise it will omit / research

//const ASSET_PATH = process.env.ASSET_PATH || '/myapp/wwwroot/dist/';

module.exports = {
    entry: {
       app: './src/index.js',     
    },
    output: {
       // publicPath: ASSET_PATH,
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }, 
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            filename: '../../Views/Shared/_Layout.cshtml',
            template: '../Views/Shared/_Template.cshtml',
            inject: false
        }),
    ],
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$|jsx/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                exclude: /node_modules/
            },
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.svg$/,
                exclude: path.resolve(__dirname, 'node_modules', 'font-awesome'),
                use: ['babel-loader', 'react-svg-loader'],
            },
        ]
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        moduleIds: "hashed",
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 300000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // // get the name. E.g. node_modules/packageName/not/this/part.js
                        // //or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];
                        //  //npm package names are URL-safe, but some servers don't like @ symbols
                        return `react-dot-net-app.${packageName.replace("@", "")}`;
                    }
                }
            }
        }
    }
};