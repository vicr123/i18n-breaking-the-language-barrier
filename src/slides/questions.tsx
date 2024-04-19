import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

export function QuestionsSlide() {
    const {t} = useTranslation();

    return <Slide>
        <h1>{t("QUESTIONS")}</h1>
    </Slide>
}