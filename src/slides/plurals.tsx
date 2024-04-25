import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {LanguageIdentifier} from "../components/languageIdentifier.tsx";
import {CodeBlock} from "../components/codeblock.tsx";

import PluralsBadExample from "../examples/plurals-bad.js?raw"
import PluralsGoodExample from "../examples/plurals-good.js?raw"
import {UsageExample} from "../components/usageExample.tsx";
import {useState} from "react";

export function PluralsSlide() {
    const {t, i18n} = useTranslation();
    const [number, setNumber] = useState(4);

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("PLURALS")}</h1>
            <p>{t("PLURALS_DESCRIPTION")}</p>
            <CodeBlock code={PluralsBadExample} lineNumbers={"2"} />
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
            </div>

            <div className={"fragment"}>
                <input style={{width: "100%"}} type={"range"} max={100} value={number}
                       onChange={e => setNumber(parseInt(e.target.value))}/>

                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                    {["en", "fr", "uk"].map(lang => {
                        const t = i18n.getFixedT(lang, "demo");
                        return <p>{t("BOOK", {count: number})}</p>
                    })}
                </div>
            </div>

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
        </Slide>
        <Slide>
            <h1>{t("PLURALS")}</h1>
            <div className={"fragment"}>
                <UsageExample type={"incorrect"} explanation={t("PLURAL_INCORRECT_EXPLANATION")}>
                    <CodeBlock code={PluralsBadExample} lineNumbers={""}/>
                </UsageExample>
            </div>
            <div className={"fragment"}>
                <UsageExample type={"correct"} explanation={t("PLURAL_CORRECT_EXPLANATION")}>
                    <CodeBlock code={PluralsGoodExample} lineNumbers={""}/>
                </UsageExample>
            </div>

            <div className={"fragment"}>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                    <div>
                        <LanguageIdentifier lang={"en"}/>
                        <CodeBlock
                            code={["BOOK_one", "BOOK_other"].map(resource => `"${resource}": "${i18n.getResource("en", "demo", resource)}"`).join("\n")}/>
                    </div>
                    <div>
                        <LanguageIdentifier lang={"fr"}/>
                        <CodeBlock
                            code={["BOOK_one", "BOOK_other"].map(resource => `"${resource}": "${i18n.getResource("fr", "demo", resource)}"`).join("\n")}/>
                    </div>
                    <div>
                        <LanguageIdentifier lang={"uk"}/>
                        <CodeBlock
                            code={["BOOK_one", "BOOK_few", "BOOK_many"].map(resource => `"${resource}": "${i18n.getResource("uk", "demo", resource)}"`).join("\n")}/>
                    </div>
                </div>
            </div>
        </Slide>
    </Slide>
}