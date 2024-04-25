import {Trans, useTranslation} from "react-i18next";
import {Slide} from "../slide.tsx";
import {InterpolationPart} from "../components/InterpolationPart.tsx";
import {CodeBlock} from "../components/codeblock.tsx";
import {UsageExample} from "../components/usageExample.tsx";
import {LanguageIdentifier} from "../components/languageIdentifier.tsx";

export function InterpolationSlide() {
    const {t, i18n} = useTranslation();
    const tInterpolationEn = i18n.getFixedT("en", "demo");
    const tInterpolationDa = i18n.getFixedT("da", "demo");
    const tInterpolationJa = i18n.getFixedT("ja", "demo");

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

            <div dir={"ltr"}>
                <div>
                    <LanguageIdentifier lang={"en"}/>
                </div>
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
            </div>

            <UsageExample type={"incorrect"}>
                <CodeBlock code={`t("COPY_ERROR_1") + source + t("COPY_ERROR_2") + destination`}/>
            </UsageExample>

            <div dir={"ltr"}>
                <div>
                    <LanguageIdentifier lang={"da"}/>
                </div>
                <Trans t={tInterpolationDa}
                       i18nKey={"INTERPOLATION_2"}
                       values={{source: "main.js", destination: "Project"}}
                       components={{
                           1: <span className={"highlight"}/>,
                           ruby: <ruby/>,
                           rp: <rp/>,
                           rt: <rt/>
                       }}
                />
            </div>

            <div dir={"ltr"}>
                <div>
                    <LanguageIdentifier lang={"ja"}/>
                </div>
                <Trans t={tInterpolationJa}
                       i18nKey={"INTERPOLATION_2"}
                       values={{source: "main.js", destination: "Project"}}
                       components={{
                           1: <span className={"highlight"}/>,
                           ruby: <ruby/>,
                           rp: <rp/>,
                           rt: <rt/>
                       }}
                />
            </div>
            <aside className="notes" data-markdown={""}>
                main.js o project ni kopii dekimasendeshita
            </aside>
        </Slide>
        <Slide>
            <h1>{t("INTERPOLATION")}</h1>
            <p>{t("INTERPOLATION_TRANSLATION_STRINGS")}</p>
            {languages.map(lang => {
                return <CodeBlock
                    code={`"INTERPOLATION": "${i18n.getResource(lang, "demo", "INTERPOLATION").replace("<1>", "").replace("</1>", "")}"`}/>
            })}

            <br/>

            <div className={"fragment"}>
                <UsageExample type={"correct"} explanation={t("INTERPOLATION_REASON")}>
                    <CodeBlock code={`t("FIXED_BUG", { name: username })`} />
                </UsageExample>
            </div>
        </Slide>
    </Slide>
}