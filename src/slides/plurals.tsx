import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {LanguageIdentifier} from "../languageIdentifier.tsx";

export function PluralsSlide() {
    const {i18n} = useTranslation();

    return <Slide data-background-color="rgb(100, 0, 0)">
        <h1>Plurals</h1>
        <div data-fragment-index="2" className="fragment"
             style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {["en", "nl" ,"pl"].map(lang => {
                const t = i18n.getFixedT(lang);

                return <div>
                    <p><LanguageIdentifier lang={lang} /></p>

                    {[0, 1, 2, 3, 5, 6].map(n => {
                        return <p>{t("EGG", { count: n })}</p>
                    })}
                </div>
            })}
        </div>
    </Slide>
}