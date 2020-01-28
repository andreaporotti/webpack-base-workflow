// get npm script name
const currentScript = process.env.npm_lifecycle_event;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
];

// global config
let config = {
    entry: './src/assets/js/Main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.s*css$/i, // gets both .css and .scss files
                use: ['css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    watch: true
};

// dev config
if (currentScript == 'dev') {
    config.mode = 'development';

    // import CSS into JS
    config.module.rules[0].use.unshift('style-loader');
}

// prod config
if (currentScript == 'prod') {
    config.mode = 'production';

    // minify and extract CSS
    config.plugins.push(new MiniCssExtractPlugin({filename: 'bundle.css'}));
    config.module.rules[0].use.unshift(MiniCssExtractPlugin.loader);
    postCSSPlugins.push(require('cssnano'));
}

module.exports = config;