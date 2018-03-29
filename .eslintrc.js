
module.exports = {
        "extends": "standard",
        "env": {
          "es6": true,
          "node": true
        },
        "globals": {
          "document": false,
          "window": false,
          "console": false,
          "fetch": false,
          "handleClick": false
        },

        "rules": {
          "indent": [
            2,
            2
          ],
          "semi": [
            "error",
            "always"
          ],
          // comment out to see unused error for separating files - all functions are being used
          "no-unused-vars": 0,
          "no-undef": 0
        }
};