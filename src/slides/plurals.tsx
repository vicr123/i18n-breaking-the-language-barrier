import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {LanguageIdentifier} from "../languageIdentifier.tsx";

export function PluralsSlide() {
    const {t, i18n} = useTranslation();

    return <Slide data-background-color="rgb(29, 83, 110)">
        <h1>{t("PLURALS")}</h1>
        <div data-fragment-index="2" className="fragment"
             style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {["en", "fr", "pl"].map(lang => {
                const t = i18n.getFixedT(lang, "demo");

                return <div>
                    <p><LanguageIdentifier lang={lang}/></p>

                    {[0, 1, 2, 3, 5, 6].map(n => {
                        return <p>{t("BOOK", {count: n})}</p>
                    })}
                </div>
            })}

            <aside className="notes">
                FR:

                Zero livre
                Une livre
                Deux livre
            </aside>
        </div>
    </Slide>
}