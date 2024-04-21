import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

import Styles from "./intro.module.css";

export function IntroSlide() {
    const {t} = useTranslation();

    return <Slide>
        <h1>{t("I18N_QUESTION_MARK")}</h1>
        <p>{t("I18N_WHAT_IS_I18N")}</p>
        <div className={`${Styles.i18nBox} fragment`}>
            <div className={Styles.i18nGrid}>
                {[..."Internationalisation"].map(c => <span>{c}</span>)}
                <span/>
                <div style={{gridColumn: "span 18", height: "5px", background: "black"}}/>
                <span/>
                <span/>
                <div className={Styles.i18nCounter}>{t("I18N_SHORTENED_COUNT")}</div>
            </div>
        </div>

        <p className={"fragment"}>And what is internationalisation?</p>

        <aside className="notes">
            i18n: I[nternationalisatio]n

            The process of translating software to appeal for an international audience.

            Maybe mention G10n?
        </aside>
    </Slide>
}