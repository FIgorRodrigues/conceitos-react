const { plugins } = require("@babel/preset-env/lib/plugins-compat-data");

module.exports = {
    presets: [
        "@babel/preset-env", 
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
    ]
}