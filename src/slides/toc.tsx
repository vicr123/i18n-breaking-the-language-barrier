import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

export function TocSlide() {
    const {t} = useTranslation();

    return <Slide>
        <div style={{display: "grid", gridTemplateRows: "max-content max-content max-content max-content", gridTemplateColumns: "1fr 1fr", gridAutoFlow: "row", gap: "10px"}}>
            <h1 style={{gridColumn: "span 2"}}>{t("TOC_TITLE")}</h1>

            <div>
                <h3>{t("TRANSLATING_TEXT")}</h3>
                <p>{t("TOC_TRANSLATING_TEXT")}</p>
            </div>

            <div>
                <h3>{t("INTERPOLATION")}</h3>
                <p>{t("TOC_INTERPOLATION")}</p>
            </div>

            <div>
                <h3>{t("PLURALS")}</h3>
                <p>{t("TOC_PLURALS")}</p>
            </div>

            <div>
                <h3>{t("FORMATS")}</h3>
                <p>{t("TOC_FORMATS")}</p>
            </div>

            <div>
                <h3>{t("BIDIRECTIONALITY")}</h3>
                <p>{t("TOC_BIDIRECTIONALITY")}</p>
            </div>
        </div>
    </Slide>
}