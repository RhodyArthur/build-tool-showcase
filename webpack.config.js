const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/, 
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into separate files
                    'css-loader',
                     'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Apply this rule to image files
                type: 'asset/resource', // Handle asset files
                generator: {
                    filename: 'images/[name][ext][query]', // Output path for images
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template for the HTML file
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Output file for extracted CSS
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'public'), // Serve files from the 'dist' directory
        compress: true, // Enable gzip compression
        port: 9000, // Port to run the development server
    },
    mode: 'development',
    devtool: 'source-map', // Generate source maps for easier debugging
};
