import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const ns = 'common';

export const initTranslate = (lng: string, resources: Resource) => {
    i18n
        .use(initReactI18next)
        .init({
            lng,
            ns,
            defaultNS: ns,
            keySeparator: false,
            resources: {
                [lng]: {
                    [ns]: resources,
                }
            },
        });
}