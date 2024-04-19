import {useTranslation} from "react-i18next";
import {Slide} from "../slide.tsx";
import {LanguageIdentifier} from "../languageIdentifier.tsx";

export function InterpolationSlide() {
    const {i18n} = useTranslation();

    return <Slide data-background-color="rgb(100, 0, 0)">
        <h1>Interpolation</h1>
        <div data-fragment-index="2" className="fragment"
             style={{display: "grid", gridTemplateColumns: "1fr"}}>
            {["en", "nl" ,"pl"].map(lang => {
                const t = i18n.getFixedT(lang);

                return <div>
                    <p><LanguageIdentifier lang={lang}/></p>
                    <p>{t("INTERPOLATION")}</p>
                </div>
            })}
        </div>
    </Slide>
}