module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'react-hooks',
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};