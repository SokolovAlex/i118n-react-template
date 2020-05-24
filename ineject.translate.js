const { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } = require('fs');
const fg = require('fast-glob');
const { join, basename } = require('path');
const Parser = require('i18next-scanner').Parser;
const { i18nextToPot, i18nextToPo, gettextToI18next } = require('i18next-conv');
const argv = require('yargs').argv;
const { buildTo } = require('./config');

const isPotMode = 'pot' in argv;
const isJsonMode = 'json' in argv;
const recreatePo = 'po' in argv;
const isCopyMode = 'copy' in argv;

const translatePath = path => join(__dirname, 'translate/', path);
const translateDest = path => join(buildTo, 'translate/', path);
const ruPoPath = translatePath('ru.po');
const enPoPath = translatePath('en.po');
const ruJsonPath = translatePath('ru.json');
const enJsonPath = translatePath('en.json');

const createFolder = dir => {
    if (!existsSync(dir)) {
        mkdirSync(dir);
    }
};

const generatePot = async () => {
    const parser = new Parser({
        keySeparator: false,
        func: {
            list: ['t'],
        },
        lngs: ['ru', 'en'],
        defaultLng: 'ru',
        ns: 'common',
        defaultNs: 'common',
    });
    const paths = await fg(['src/**/*.{ts,tsx}']);
    paths.forEach(path => {
        const content = readFileSync(path, 'utf-8');
        parser.parseFuncFromString(content);
    });
    const extractResult = parser.get({ sort: true });
    const potContent = await i18nextToPot('ru-RU', JSON.stringify(extractResult.ru.common), { ctxSeparator: false });

    writeFileSync(translatePath('template.pot'), potContent);

    if (recreatePo) {
        const ruContent = await i18nextToPo('ru-RU', JSON.stringify(extractResult.ru.common), { ctxSeparator: false });
        writeFileSync(ruPoPath, ruContent);
        const enContent = await i18nextToPot('en-EN', JSON.stringify(extractResult.en.common), { ctxSeparator: false });
        writeFileSync(enPoPath, enContent);
    }
};

const copyJson = () => {
    createFolder(translateDest('./'));
    copyFileSync(ruJsonPath, translateDest(basename(ruJsonPath)));
    copyFileSync(enJsonPath, translateDest(basename(enJsonPath)));
};

const generateJson = async () => {
    const ruPo = readFileSync(ruPoPath);
    const ruContent = await gettextToI18next('ru-RU', ruPo);
    writeFileSync(ruJsonPath, ruContent);
    const enPo = readFileSync(enPoPath);
    const enContent = await gettextToI18next('en-EN', enPo);
    writeFileSync(enJsonPath, enContent);
    copyJson();
};

if (isCopyMode) {
    return copyJson();
}

if (isPotMode) {
    return generatePot();
}

if (isJsonMode) {
    return generateJson();
}

console.info('select on modes: pot, json, copy')