const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

module.exports = (env, argv) => {
    const prod = argv.mode === "production";
    
    return {
        mode: prod ? "production" : "development", // 개발 및 프로덕션 모드 
        devtool: prod ? "hidden-source-map" : "eval", //모드에 따라 SourceMap 확인 여부
        entry: "./src/index.tsx", // 시작점 경로를 지정하는 옵션, 해당 파일부터 필요한 모듈 로딩 및 하나의 파일로 묶기
        output: { // webpack이 번들링 결과물을 위치할 경로 및 이름
            path: path.join(__dirname, "/dist"),
            filename: "[name].js",
        },
        devServer: { //실시간으로 개발 모드로 개발하는 중 변경사항이 프로젝트에 반영
            port: 3000,
            hot: true,
        },
        resolve: { //배열 안 확장자에 따라서 처리
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        module: { // loader 설정 / babel-loader, ts-loader 등
            rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/
            
            },

            {
                test: /\.scss$/,
                use: [
                  "style-loader", // creates style nodes from JS strings
                  "css-loader", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/
              }



            
            ],
        },
        plugins: [ //부가 기능을 할 플러그인 설정
            new webpack.ProvidePlugin({
                React: "react",
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: process.env.NODE_ENV === 'production' ? {
                    collapseWhitespace: true, // 빈칸 제거
                    removeComments: true, // 주석 제거
                } : false,
            }),
            new CleanWebpackPlugin(),
        ],
    }
};