import {useTranslation} from "react-i18next";
import {Slide} from "../slide.tsx";
import {InterpolationPart} from "../components/InterpolationPart.tsx";
import {CodeBlock} from "../components/codeblock.tsx";

export function InterpolationSlide() {
    const {t, i18n} = useTranslation();

    const languages = ["en", "nl", "de", "ja"];

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("INTERPOLATION")}</h1>
            <p>{t("INTERPOLATION_INTRODUCTION")}</p>
        </Slide>
        <Slide>
            <h1>{t("INTERPOLATION")}</h1>
            <InterpolationPart languages={languages} />

            <aside className="notes" data-markdown={""}>
                NAME-san to issho ni bagu o naoshimashita
            </aside>
        </Slide>
        <Slide>
            <h1>{t("INTERPOLATION")}</h1>
            <p>Translation strings:</p>
            {languages.map(lang => {
                    return <CodeBlock code={`"INTERPOLATION": "${i18n.getResource(lang, "demo", "INTERPOLATION")}"`} />
                })}
        </Slide>
    </Slide>
}