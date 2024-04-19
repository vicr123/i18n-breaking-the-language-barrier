import {useTranslation} from "react-i18next";
import {Slide} from "../slide.tsx";
import {LanguageIdentifier} from "../languageIdentifier.tsx";
import {useState} from "react";

export function InterpolationSlide() {
    const {t, i18n} = useTranslation();
    const [name, setName] = useState("");

    return <Slide data-background-color="rgb(100, 0, 0)">
        <section>
            <h1>{t("INTERPOLATION")}</h1>
            <p>{t("INTERPOLATION_INTRODUCTION")}</p>
        </section>
        <section>
            <h1>{t("INTERPOLATION")}</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
                <input type={"text"} placeholder={t("NAME")} value={name} onChange={e => setName(e.target.value)}/>

                {["en", "nl", "pl"].map(lang => {
                    const t = i18n.getFixedT(lang, "demo");

                    return <div>
                        <p><LanguageIdentifier lang={lang}/></p>
                        <p>{t("INTERPOLATION", {name: name})}</p>
                    </div>
                })}
            </div>
        </section>
        <section>
            <h1>{t("INTERPOLATION")}</h1>
            <pre>
                <code data-trim={""} data-noescape={""} data-line-numbers={"2|3|4"}>
                    {`<html></html>`}
                </code>
            </pre>
        </section>
    </Slide>
}