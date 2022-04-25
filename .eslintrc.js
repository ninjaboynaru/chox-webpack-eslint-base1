const path = require('path');

module.exports = {
    env: {
        browser: true
    },
    extends: [
        "eslint:recommended",
        path.resolve(__dirname, 'linting/.eslintrc-import.js'),
        path.resolve(__dirname, 'linting/.eslintrc-main.js')
    ]
}