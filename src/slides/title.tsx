import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

import Styles from "./title.module.css"

export function TitleSlide() {
    const {t, i18n} = useTranslation();

    return <Slide>
        <h1>{t("I18N")}</h1>
        <h3>{t("I18N_SUBTITLE")}</h3>

        <div className={Styles.languageSwitcher}>
            <span onClick={() => i18n.changeLanguage("en")}>🇬🇧</span>
            <span onClick={() => i18n.changeLanguage("nl")}>🇳🇱</span>
            <span onClick={() => i18n.changeLanguage("de")}>🇩🇪</span>
            <span onClick={() => i18n.changeLanguage("he")}>🇮🇱</span>
        </div>

        <div className={Styles.links}>
            <a href={"https://github.com/vicr123/i18n-breaking-the-language-barrier"} target={"_blank"}><img src={"/github-mark-white.svg"} alt={"GitHub"} className={Styles.github} /></a>
        </div>

        <aside className="notes">
            Speaker notes go here
        </aside>
    </Slide>
}