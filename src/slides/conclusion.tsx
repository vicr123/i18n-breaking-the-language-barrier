import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

export function ConclusionSlide() {
    const {t} = useTranslation();

    return <Slide>
        <h1>{t("FINAL_SLIDE_TITLE")}</h1>
        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
            <div>
                <div>{t("VIEW_SLIDES_ONLINE")}</div>
                <a href={"https://i18n.vicr123.dev/"}>https://i18n.vicr123.dev/</a>
            </div>

            <div>
                <div>{t("VIEW_GITHUB_SOURCE")}</div>
                <a href={"https://github.com/vicr123/i18n-breaking-the-language-barrier/"}>https://github.com/vicr123/i18n-breaking-the-language-barrier</a>
            </div>

            <div>
                <div>{t("VIEW_I18NEXT")}</div>
                <a href={"https://www.i18next.com/"}>https://www.i18next.com/</a>
            </div>
        </div>

        <aside className="notes">
            Don't forget to remind everyone that i18next is not
            mandatory and that there are lots of i18n
            libraries for use everywhere
        </aside>
    </Slide>
}