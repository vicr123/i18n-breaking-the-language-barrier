import { useTranslation } from "react-i18next";
import { Slide } from "../slide.tsx";

export function CtaSlide() {
    const { t } = useTranslation();

    return <Slide>
        <h1>{t("CTA_TITLE")}</h1>
        <br />
        <h3>{t("CTA_DESCRIPTION")}</h3>
        <p>{t("CTA_DESCRIPTION_2")}</p>
    </Slide>
}
