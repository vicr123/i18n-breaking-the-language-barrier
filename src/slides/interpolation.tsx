import {Trans, useTranslation} from "react-i18next";
import {Slide} from "../slide.tsx";
import {LanguageIdentifier} from "../languageIdentifier.tsx";
import {useState} from "react";

export function InterpolationSlide() {
    const {t, i18n} = useTranslation();
    const [name, setName] = useState("");

    const languages = ["en", "nl", "de", "ja"];

    return <Slide data-background-color="rgb(29, 83, 110)">
        <section>
            <h1>{t("INTERPOLATION")}</h1>
            <p>{t("INTERPOLATION_INTRODUCTION")}</p>
        </section>
        <section>
            <h1>{t("INTERPOLATION")}</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
                <input type={"text"} placeholder={t("NAME")} value={name} onChange={e => setName(e.target.value)}/>

                {languages.map(lang => {
                    const t = i18n.getFixedT(lang, "demo");

                    return <div>
                        <p><LanguageIdentifier lang={lang}/></p>
                        <Trans t={t}
                               i18nKey={"INTERPOLATION"}
                               values={{name: name}}
                               components={{
                                   1: <span className={"highlight"}/>,
                                   ruby: <ruby/>,
                                   rp: <rp />,
                                   rt: <rt />
                               }}
                        />
                    </div>
                })}
            </div>

            <aside className="notes" data-markdown={""}>
                NAME-san to issho ni bagu o naoshimashita
            </aside>
        </section>
        <section>
            <h1>{t("INTERPOLATION")}</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
            {languages.map(lang => {
                    return <pre>
                        <code data-trim={""} data-noescape={""}>
                            "INTERPOLATION": "{i18n.getResource(lang, "demo", "INTERPOLATION")}"
                        </code>
                    </pre>
                })}
            </div>
        </section>
    </Slide>
}