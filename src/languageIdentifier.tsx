import {useTranslation} from "react-i18next";
import {useMemo} from "react";

export function LanguageIdentifier({lang}: {
    lang: string
}) {
    const {i18n} = useTranslation();

    const flag = useMemo(() => {
        if (lang == "en") return "🇬🇧";

        const codePoints = lang
            .toUpperCase()
            .split('')
            .map(char =>  127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }, [lang]);

    const displayNames = new Intl.DisplayNames([i18n.language], {
        type: "language"
    });

    return `${flag} ${displayNames.of(lang)}`;
}
