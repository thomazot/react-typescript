module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    extends: [
        "react-app",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "import", "jsx-a11y"],
    rules: {
        // Indent with 4 spaces
        indent: ["error", 4],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".tsx"]
            }
        ],
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            typescript: {}
        }
    }
}
