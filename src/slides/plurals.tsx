import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {LanguageIdentifier} from "../languageIdentifier.tsx";
import {CodeBlock} from "../components/codeblock.tsx";

import PluralsBadExample from "../examples/plurals-bad.js?raw"

export function PluralsSlide() {
    const {t, i18n} = useTranslation();

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("PLURALS")}</h1>
            <p>Plural rules differ between languages</p>
            <CodeBlock code={PluralsBadExample} />
        </Slide>
        <Slide>
            <h1>{t("PLURALS")}</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                {["en", "fr", "uk"].map(lang => {
                    const t = i18n.getFixedT(lang, "demo");

                    return <div className={"fragment"} dir={i18n.dir(lang)}>
                        <p><LanguageIdentifier lang={lang}/></p>

                        {[1, 2, 7, 35, 0].map(n => {
                            return <p>{t("BOOK", {count: n})}</p>
                        })}
                    </div>
                })}

                <aside className="notes" data-markdown={""}>
                    FR:

                    Une livre
                    Deux livre
                    Sept livre
                    Trente-cinq livre (thank)
                    Zero livre

                    UK: [knyh]
                    - Odna knyha
                    - Dvi knyhy
                    - Sim knyh
                    - Trydtsyat' pyat' knyh
                    - Nulʹ knyh
                    IT'S LIKE CANOE BUT NOT EXACTLY CANOE
                    KNYH

                    ..2, ..3, ..4 книги / 11-19, ..5, ..6, ..7, ..8, ..9 книг / ..1 книга
                </aside>
            </div>
        </Slide>
    </Slide>
}