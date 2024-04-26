import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

import Styles from "./intro.module.css";
import {useEffect, useState} from "react";

export function IntroSlide() {
    const {t, i18n} = useTranslation();
    const [letter, setLetter] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setLetter(!letter);
        }, 500);

        return () => clearInterval(interval);
    }, [letter]);

    const internationalisationChars = [...(`Internationali${letter ? "s" : "z"}ation`)].map((c, i) => <span key={i}>{c}</span>);
    if (i18n.dir() == "rtl") internationalisationChars.reverse();

    return <Slide>
        <h1>{t("I18N_QUESTION_MARK")}</h1>
        <p>{t("I18N_DESCRIPTION")}</p>
        <div className={`${Styles.i18nBox} fragment`}>
            <div className={Styles.i18nGrid}>
                {internationalisationChars}
                <span/>
                <div style={{gridColumn: "span 18", height: "5px", background: "black"}}/>
                <span/>
                <span/>
                <div className={Styles.i18nCounter}>{t("I18N_SHORTENED_COUNT")}</div>
            </div>
        </div>

        <p className={"fragment"}>{t("I18N_INTERNATIONALISATION")}</p>

        <aside className="notes">
            i18n: I[nternationalisatio]n

            The process of translating software to appeal for an international audience.

            Maybe mention G10n?
        </aside>
    </Slide>
}