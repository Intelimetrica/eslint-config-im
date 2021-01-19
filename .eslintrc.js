module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:css-modules/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": ["react", "css-modules"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "jsx-quotes": [2, "prefer-single"],
    "react/prop-types": "off",
    "array-bracket-spacing": ["error", "always"],
    "max-len": "off",
    "comma-dangle": ["error", "never"],
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "arrow-parens": ["error", "as-needed"],
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        "handlers": []
      }
    ],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react/jsx-closing-bracket-location": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-props-no-spreading": 0,
    "no-use-before-define": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-param-reassign": 0,
    "jsx-a11y/tabindex-no-positive": 0,
    "react/no-array-index-key": 0,
    "no-shadow": 0,
    "array-callback-return": 0,
    "no-else-return": 0,
    "no-extra-semi": 0,
    "prefer-template": 0,
    "no-confusing-arrow": 0,
    "camelcase": 0,
    "no-underscore-dangle": 0,
    "no-lonely-if": 0,
    "prefer-destructuring": 0,
    "consistent-return": 0,
    "global-require": 0,
    "react/jsx-no-target-blank": 0,
    "react/no-access-state-in-setstate": 0,
    "no-plusplus": 0,
    "react/no-string-refs": 0,
    "react/sort-comp": 0,
    "no-prototype-builtins": 0,
    "no-restricted-globals": 0,
    "react/require-default-props": 0,
    "radix": 0,
    "react/no-did-update-set-state": 0,
    "react/button-has-type": 0,
    "react/default-props-match-prop-types": 0,
    "import/prefer-default-export": 0,
    "no-restricted-properties": 0,
    "no-return-assign": 0,
    "no-unsafe-finally": 0,
    "no-useless-escape": 0,
    "no-case-declarations": 0,
    "guard-for-in": 0,
    "no-restricted-syntax": 0,
    "class-methods-use-this": 0,
    "eol-last": ["error", "never"],
    "import/no-useless-path-segments": 0,
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^__"
      }
    ],
    "no-console": [
      "error",
      {
        "allow": ["debug"]
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": [
      "webpack",
      {
        "node": {
          "extensions": [".js",".jsx"]
        },
      }
    ],
    "css-modules": {
      "basePath": "/"
    }
  }
};
