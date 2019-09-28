const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const px2rem = require('postcss-px2rem')
// 抽离css
const extractCss = new ExtractTextPlugin("style.css")
// html 模版
const htmlTemplate = new HtmlWebpackPlugin({
    template:'./src/index.html',
    favicon: './public/favicon.png',
    inject: 'body',
    hash: true,
})
const config = {
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[hash:4].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          '@': path.resolve('src'),
        }
    },
    module:{
        rules:[
            {  
                test: /\.(woff|eot|ttf|svg|png|jpg)$/,  
                use: [  
                    {  
                        loader: 'url-loader',  
                        options: {  
                            limit: '1024' ,
                            name: '[name].[hash:4].[ext]'  
                        }                        
                    },  
                ]  
            },
            {  
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [  
                    {  
                        loader: 'url-loader',  
                        options: {  
                            limit: '1024',
                            name: '[name].[hash:4].[ext]'  
                        }  
                    },  
                ]  
            },
            {
                test: /\.(css|less)$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ["css-loader","less-loader"]
                // })
                use:[
                    require.resolve('style-loader'),
                    {
                        loader:require.resolve('css-loader'),
                        options:{
                            importLoaders:1,
                        },
                    },
                    {
                        // Options for PostCSS as we reference these options twice
                        // Adds vendor prefixing based on your specified browser support in
                        // package.json
                        loader: require.resolve('postcss-loader'),
                        options: {
                          // Necessary for external CSS imports to work
                          // https://github.com/facebook/create-react-app/issues/2677
                          ident: 'postcss',
                          // 这些是配置rem的
                          plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            require('postcss-preset-env')({
                              autoprefixer: {
                                flexbox: 'no-2009',
                              },
                              stage: 3,
                            }),
                            px2rem({remUnit: 37.5})  // 这里表示 75px = 1rem
                          ],
                        },
                      },
                    {
                        loader:require.resolve('less-loader')
                    }
                ]
            },
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader",
                exclude:/node_modules/
            }
        ]
    },
}

module.exports = {
    htmlTemplate,
    extractCss,
    config
}
