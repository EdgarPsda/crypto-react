/* eslint-disable no-undef */
config = {
    presets: ["@babel/preset-env", ['@babel/preset-react', { "runtime": "automatic" }]],
    targets: {
        node: 'current'
    }
}

module.exports = config;