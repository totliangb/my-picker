var path = require('path');
var sass = require('node-sass');
var fs = require("fs");

// sass编译
if(process.env.NODE_ENV == 'production'){
    sass.render({
        file: "./src/style/style.scss",
    }, function(error, result) { // node-style callback from v3.0.0 onwards
        if(error){
            console.error('error',error)
        } else {
            fs.writeFile( './dist/picker.css', result.css, function(err){
                if(error){
                    console.error('error',error)
                }
            });
        }
    });

    //热更样式,热更调试时候使用
    if(process.env.NODE_ENV != 'production'){
        require("./style/style.scss");
    }
}

// webpack配置
module.exports = {

    //项目的文件夹 可以直接用文件夹名称 默认会找index.js ，也可以确定是哪个文件名字
    entry: process.env.NODE_ENV == 'production' ? [ './src/picker.js'] : ["./debugger/debugger.js"],

    //输出的文件名,合并以后的js会命名为bundle.js
    output: {
        path: path.join(__dirname, "dist/"),
        library: 'picker',
        libraryTarget: 'umd',
        publicPath: "http://localhost:8088/dist/",
		// 生成的打包文件名  
		filename: 'picker.js'
    },
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: "style!css!sass",
		},{
			test: /\.(css)$/,
			// 多个加载器通过“!”连接
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg)$/,
			// url-loader 支持base64 编码的行内资源
			loader: 'url-loader?size=8192'
		}]
	},
    devServer: {
        historyApiFallback: true,
        contentBase: "./",
        quiet: false, //控制台中不输出打包的信息
        noInfo: false,
        hot: true,
        inline: true,
        lazy: false,
        progress: true, //显示打包的进度
        watchOptions: {
            aggregateTimeout: 300
        },
        port: '8088'
    }
};
