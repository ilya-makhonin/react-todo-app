const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HWPConfig = require('./settingsForModeType/HtmlWebpackPluginConfig');
const cssLoader = require('./settingsForModeType/cssLoader')('production');
const lessLoader = require('./settingsForModeType/lessLoader');
const scssLoader = require('./settingsForModeType/scssLoader');
const styleOutput = require('./settingsForModeType/stylesOutput');

const { options, forPlugin } = styleOutput('production', 'plugin');
const miniCssPlugin = { loader: MiniCssExtractPlugin.loader, options };

const alias = require('./alias');
const _path_ = require('./__path');


const buildConfig = {
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {
                    parse: { ecma: 8 },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2
                    },
                    mangle: { safari10: true },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    }
                },
                cache: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: { chunks: 'all', name: false },
        runtimeChunk: true
    },
    devtool: "hidden-source-map",
    entry: _path_.mainEntryPointPath,
    output: {
        path: _path_.distBasePath,
        filename: 'assets/js/[name].[hash].build.js',
        chunkFilename: 'assets/js/[name].[hash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                enforce: 'pre',
                use: 'eslint-loader',
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [ miniCssPlugin, cssLoader ],
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.(sa|sc)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [ miniCssPlugin, cssLoader, scssLoader('production') ],
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: [ miniCssPlugin, cssLoader, lessLoader ],
                include: [ _path_.srcBasePath ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/media',
                            publicPath: _path_.srcBasePath
                        }
                    },
                ]
            }
        ]
    },
    resolve: { alias },
    plugins: [
        new MiniCssExtractPlugin(forPlugin),
        new HtmlWebpackPlugin(HWPConfig('production')),
        new InterpolateHtmlPlugin({ 'SOURCE_URL': 'assets' }),
        new ManifestPlugin({ fileName: 'assets-manifest.json' }),
        new CopyWebpackPlugin([
            { from: _path_.publicGetPath('favicon.ico'), to: _path_.distGetPath('assets') },
            { from: _path_.publicGetPath('manifest.json'), to: _path_.distGetPath('assets') },
        ]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};


module.exports = buildConfig;
