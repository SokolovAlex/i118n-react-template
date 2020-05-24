module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
                singleQuote: false,
            },
        },
    ],
};