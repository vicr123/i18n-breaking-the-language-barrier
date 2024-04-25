import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {Twemoji} from "./twemoji.tsx";

export function LanguageIdentifier({lang}: {
    lang: string
}) {
    const {i18n} = useTranslation();

    const flag = useMemo(() => {
        if (lang.length != 5) {
            if (lang == "en") return "🇬🇧";
            if (lang == "uk") return "🇺🇦";
            if (lang == "ja") return "🇯🇵";
            if (lang == "he") return "🇮🇱";
            if (lang == "ar") return "🇸🇦";
            if (lang == "vi") return "🇻🇳";
            if (lang == "da") return "🇩🇰";
        }

        let flag = lang;
        if (lang.length == 5) flag = lang.substring(3);

        const codePoints = flag
            .toUpperCase()
            .split('')
            .map(char =>  127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }, [lang]);

    const displayNames = new Intl.DisplayNames([i18n.language], {
        type: "language"
    });

    return <span dir={i18n.dir()}><Twemoji emoji={flag} /> {[...displayNames.of(lang)!].map((c, i) => i == 0 ? c.toUpperCase() : c).join("")}</span>;
}
