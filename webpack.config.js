const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\,sass$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ]
            },
            {
                enforce: "pre",
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
                path: path.resolve(__dirname, "dist"),
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
            entry: { gui: './src/gui.tsx' },
            output: {
                path: path.resolve(__dirname, "dist"),
                filename: "gui/[name].js"
            },
            plugins: [new HtmlWebpackPlugin()],
            externals: {
                "react": "React",
                "react-dom": "ReactDOM"
            }
        },
        commonConfig)
]