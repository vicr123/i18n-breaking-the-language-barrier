import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

import Styles from "./title.module.css"
import {Twemoji} from "../components/twemoji.tsx";

export function TitleSlide() {
    const {t, i18n} = useTranslation();

    return <Slide>
        <h1>{t("I18N")}</h1>
        <h3>{t("I18N_SUBTITLE")}</h3>

        <div className={Styles.languageSwitcher}>
            <span onClick={() => i18n.changeLanguage("en")}><Twemoji emoji="🇬🇧"/></span>
            <span onClick={() => i18n.changeLanguage("de")}><Twemoji emoji="🇩🇪"/></span>
            <span onClick={() => i18n.changeLanguage("ru")}><Twemoji emoji="🇷🇺"/></span>
            <span onClick={() => i18n.changeLanguage("nl")}><Twemoji emoji="🇳🇱"/></span>
            <span onClick={() => i18n.changeLanguage("da")}><Twemoji emoji="🇩🇰"/></span>
            <span onClick={() => i18n.changeLanguage("he")}><Twemoji emoji="🇮🇱"/></span>
        </div>

        <div className={Styles.links}>
            <a href={"https://github.com/vicr123/i18n-breaking-the-language-barrier"} target={"_blank"}><img src={"/github-mark-white.svg"} alt={"GitHub"} className={Styles.github} /></a>
        </div>

        <aside className="notes">
            Conclusion is on slide 13
        </aside>
    </Slide>
}