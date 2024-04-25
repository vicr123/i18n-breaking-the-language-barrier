import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

export function LanguageSlide() {
    const {t} = useTranslation();

    return <Slide data-background-color="rgb(100, 0, 0)" data-background-transition="zoom">
        <h1>{t("LANGUAGE_TITLE")}</h1>
        <p>{t("LANGUAGE_DESCRIPTION")}</p>
    </Slide>
}