import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n.use(HttpApi)
    .use(initReactI18next)
    .init({
        lng: "en",
        preload: ["en", "nl", "fr", "uk", "ja", "de"],
        ns: ["slides", "demo"],
        defaultNS: "slides",
        backend: {
            loadPath: "/translations/{{lng}}/{{ns}}.json"
        }
    })

export default i18n;