import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {LanguageIdentifier} from "../languageIdentifier.tsx";

export function PluralsSlide() {
    const {t, i18n} = useTranslation();

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("PLURALS")}</h1>
        </Slide>
        <Slide>
            <h1>{t("PLURALS")}</h1>
            <div data-fragment-index="2" className="fragment"
                 style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                {["en", "fr", "uk"].map(lang => {
                    const t = i18n.getFixedT(lang, "demo");

                    return <div dir={i18n.dir(lang)}>
                        <p><LanguageIdentifier lang={lang}/></p>

                        {[1, 2, 8, 35, 0].map(n => {
                            return <p>{t("BOOK", {count: n})}</p>
                        })}
                    </div>
                })}

                <aside className="notes" data-markdown={""}>
                    FR:

                    Zero livre
                    Une livre
                    Deux livre
                    Trente-cinq livre

                    UK: [knyh]
                    - Odna knyha
                    - Dvi knyhy
                    - Visim knyh
                    - Trydtsyat' pyat' knyh
                    - Nulʹ knyh
                    IT'S LIKE CANOE BUT NOT EXACTLY CANOE
                    KNYH
                </aside>
            </div>
        </Slide>
    </Slide>
}