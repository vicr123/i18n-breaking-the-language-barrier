import {LanguageIdentifier} from "../languageIdentifier.tsx";
import {Trans, useTranslation} from "react-i18next";
import {useState} from "react";

import Styles from "./interpolationPart.module.css";

export function InterpolationPart({languages}: {
    languages: string[]
}) {
    const {t, i18n} = useTranslation();
    const [name, setName] = useState("");

    return <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
        <input type={"text"} placeholder={t("NAME")} value={name} onChange={e => setName(e.target.value)}/>
        {languages.map(lang => {
            const t = i18n.getFixedT(lang, "demo");

            return <div dir={i18n.dir(lang)}>
                <div className={Styles.interpolationPart}>
                    <p><LanguageIdentifier lang={lang}/></p>
                    <Trans t={t}
                           i18nKey={"INTERPOLATION"}
                           values={{name: name}}
                           components={{
                               1: <span className={"highlight"}/>,
                               ruby: <ruby/>,
                               rp: <rp/>,
                               rt: <rt/>
                           }}
                    />
                </div>
            </div>
        })}
    </div>
}