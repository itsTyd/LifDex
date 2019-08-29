const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { spawn } = require('child_process');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const commonConfig = {
    devtool: "source-map",
    devServer: {
        contentBase: OUTPUT_DIR,
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
        before() {
            spawn(
                'electron --dev',
                ['./dist/main.js'],
                { shell: true, env: process.env, stdio: 'inherit' }
            )
            .on('close', code => process.exit(0))
            .on('error', spawnError => console.error(spawnError));
        }
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },  
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    useCache: true,
                    babelCore: "@babel/core"
                }
            },
            {
                enforce: "pre",
                exclude: /node_modules/,
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
}

module.exports = [
    Object.assign(
        {
            target: 'electron-main',
            entry: { main: './src/main.ts' },
            output: {
                path: OUTPUT_DIR,
                filename: "[name].js"
            },
        },
        commonConfig),
      Object.assign(
        {
            node: {
                __dirname: false
            },
            target: 'electron-renderer',
            entry: { gui: './src/gui/gui.tsx' },
            output: {
                path: OUTPUT_DIR,
                filename: "gui/[name].js"
            },
            plugins: [
                new HtmlWebpackPlugin(), 
                new webpack.ProvidePlugin({
                    "React": "react"
                })
            ]
        },
        commonConfig)
]