// Variables
const
    mode = "development",
    glob = require("glob"),
    HtmlWebPackPlugin = require("html-webpack-plugin"),
    HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

// Webpack Configuration
module.exports = [
    {
        mode: mode,
        entry: {
            'dist/vendor': './src/assets/js/vendor.js',
            'dist/app': './src/assets/js/app.js'
        },
        output: {
            path: __dirname + '/public',
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        },
                        {
                            loader: 'eslint-loader'
                        }
                    ]
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'dist/[name].css',
                            }
                        },
                        "extract-loader", "css-loader?-url", "postcss-loader", "sass-loader",
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: 'images'
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|ttf|otf|eot)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: 'fonts'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            ...glob.sync("./src/templates/**/*.html").map((template) => {
                return new HtmlWebPackPlugin({
                    template: template,
                    filename: template.replace('./src/templates/', '')
                })
            }),
            new HtmlWebpackInlineSVGPlugin(),
        ]
    }
];