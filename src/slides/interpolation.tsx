import {Trans, useTranslation} from "react-i18next";
import {Slide} from "../slide.tsx";
import {InterpolationPart} from "../components/InterpolationPart.tsx";
import {CodeBlock} from "../components/codeblock.tsx";
import {UsageExample} from "../components/usageExample.tsx";

export function InterpolationSlide() {
    const {t, i18n} = useTranslation();
    const tInterpolationEn = i18n.getFixedT("en", "demo");
    const tInterpolationNl = i18n.getFixedT("nl", "demo");

    const languages = ["en", "nl", "de", "ja"];

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("INTERPOLATION")}</h1>
            <p>{t("INTERPOLATION_INTRODUCTION")}</p>

            <div className={"fragment"}>
                <InterpolationPart languages={languages}/>
            </div>

            <aside className="notes" data-markdown={""}>
                NAME-san to issho ni bagu o naoshimashita
            </aside>
        </Slide>
        <Slide>
            <h1>{t("INTERPOLATION")}</h1>

            <Trans t={tInterpolationEn}
                   i18nKey={"INTERPOLATION_2"}
                   values={{source: "main.js", destination: "Project"}}
                   components={{
                       1: <span className={"highlight"}/>,
                       ruby: <ruby/>,
                       rp: <rp/>,
                       rt: <rt/>
                   }}
            />

            <UsageExample type={"incorrect"}>
                <CodeBlock code={`t("COPY_ERROR_1") + source + t("COPY_ERROR_2") + destination`} />
            </UsageExample>

            <Trans t={tInterpolationNl}
                   i18nKey={"INTERPOLATION_2"}
                   values={{source: "main.js", destination: "Project"}}
                   components={{
                       1: <span className={"highlight"}/>,
                       ruby: <ruby/>,
                       rp: <rp/>,
                       rt: <rt/>
                   }}
            />
        </Slide>
        <Slide>
            <h1>{t("INTERPOLATION")}</h1>
            <p>Translation strings:</p>
            {languages.map(lang => {
                    return <CodeBlock code={`"INTERPOLATION": "${i18n.getResource(lang, "demo", "INTERPOLATION").replace("<1>", "").replace("</1>", "")}"`} />
                })}
        </Slide>
    </Slide>
}