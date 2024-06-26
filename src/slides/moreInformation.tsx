import { useTranslation } from "react-i18next";
import { Slide } from "../slide";

export function MoreInformationSlide() {
    const { t } = useTranslation();

    return <Slide data-background-color="rgb(100, 0, 0)">
        <h1>{t("MORE_INFORMATION_TITLE")}</h1>
        <ul>
            <li className="fragment">{t("MORE_INFORMATION_FONT_SUPPORT")}</li>
            <li className="fragment">{t("MORE_INFORMATION_SIZING_DESIGNS")}</li>
            <li className="fragment">{t("MORE_INFORMATION_ICONS")}</li>
        </ul>
    </Slide>
}
