import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

export function TocSlide() {
    const {t} = useTranslation();

    return <Slide>
        <h1>{t("TOC_TITLE")}</h1>

        <h3>{t("TRANSLATING_TEXT")}</h3>
        <p>{t("TOC_TRANSLATING_TEXT")}</p>

        <h3>{t("INTERPOLATION")}</h3>
        <p>{t("TOC_INTERPOLATION")}</p>

        <h3>{t("PLURALS")}</h3>
        <p>{t("TOC_PLURALS")}</p>

        <h3>{t("FORMATS")}</h3>
        <p>{t("TOC_FORMATS")}</p>

        <h3>{t("BIDIRECTIONALITY")}</h3>
        <p>{t("TOC_BIDIRECTIONALITY")}</p>
    </Slide>
}