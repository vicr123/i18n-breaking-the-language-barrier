import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {InterpolationPart} from "../components/InterpolationPart.tsx";
import Styles from "./translatingText.module.css";
import {ExamplePropertyApp} from "../components/examplePropertyApp.tsx";
import {CodeBlock} from "../components/codeblock.tsx";

export function BidiSlide() {
    const {t, i18n} = useTranslation();

    const usedKeys = ["TRANSLATING_TEXT", "FIND_A_PROPERTY", "APP_PRICE", "APP_PRICE_UPPER_BOUND", "APP_NUMERIC_FILTER", "APP_BEDROOMS", "APP_BATHROOMS", "APP_GARAGE", "APP_SEARCH", "APP_BEDROOMS"];
    const code = (lang: string) => usedKeys.reduce<Record<string, string>>((acc, key) => {
        acc[key] = i18n.getResource(lang, "demo", key);
        return acc;
    }, {});

    const displayNames = new Intl.DisplayNames([i18n.language], {
        type: "language"
    });

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("BIDIRECTIONALITY")}</h1>
            <div className={"fragment"}>
                <p>{t("BIDIRECTIONALITY_DESCRIPTION")}</p>
                <ul>
                    <li>{displayNames.of("ar")}</li>
                    <li>{displayNames.of("he")}</li>
                    <li>{displayNames.of("fa")}</li>
                    <li>{displayNames.of("yi")}</li>
                </ul>
            </div>
        </Slide>
        <Slide>
            <h1>{t("BIDIRECTIONALITY")}</h1>

            <InterpolationPart languages={["en", "ar", "he"]}/>

            <aside className="notes" data-markdown={""}>
                bimusaeadat NAME salah'at alkhalal albarmaji

                be'ezrat NAME tikanti et habag
                A is always short A
            </aside>
        </Slide>
        <Slide>
            <h1>{t("BIDIRECTIONALITY")}</h1>
            <div className={Styles.split}>
                <div>
                    <ExamplePropertyApp lang={"he"}/>
                </div>
                <div>
                    <div>
                        <CodeBlock code={code("he")}/>
                    </div>
                </div>
            </div>
        </Slide>
    </Slide>
}