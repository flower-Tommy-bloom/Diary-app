const path = require('path')
const baseConfig = require('./webpack.base')
/**获取本机ip**/
function getIPAddress(){   
    var interfaces = require('os').networkInterfaces()
    for(var devName in interfaces) {
        var iface = interfaces[devName]
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i]
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address
            }
        }
    }
}
module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],
    },
    ...baseConfig.config,
    plugins:[
        baseConfig.htmlTemplate,
        baseConfig.extractCss,
    ],
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        host:getIPAddress(),
        port: process.env.PORT || 8080,
        proxy: {
            "/api": {
              target: "http://127.0.0.1:3000/",
              pathRewrite: {"^/api" : ""}
            }
          }
    }
}
