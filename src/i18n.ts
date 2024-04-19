import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        demo: {
            "INTERPOLATION": "",
            "EGG_one": "{{ count }} egg",
            "EGG_other": "{{ count }} eggs"
        }
    },
    nl: {
        demo: {
            "INTERPOLATION": "",
            "EGG_one": "{{ count }} ei",
            "EGG_other": "{{ count }} eieren"
        }
    }
}

i18n.use(initReactI18next)
.init({
    resources: resources,
    lng: "en",
    ns: "demo"
})

export default i18n;