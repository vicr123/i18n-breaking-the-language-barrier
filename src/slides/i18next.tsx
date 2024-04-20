import { Slide } from "../slide";
import {useTranslation} from "react-i18next";

export function I18nextSlide() {
    const {t} = useTranslation();
    return <Slide>
        <h1>{t("I18NEXT_TITLE")}</h1>
        <p>{t("I18NEXT_DESCRIPTION")}</p>
        <p>{t("I18NEXT_DESCRIPTION_2")}</p>
    </Slide>
}