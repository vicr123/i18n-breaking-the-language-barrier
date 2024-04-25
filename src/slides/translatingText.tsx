import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

import Styles from "./translatingText.module.css";
import {CodeBlock} from "../components/codeblock.tsx";
import {ExamplePropertyApp} from "../components/examplePropertyApp.tsx";
import {LanguageIdentifier} from "../components/languageIdentifier.tsx";
import ExamplePropertyAppBadSource from "../examples/examplePropertyAppBad.tsx?raw";
import ExamplePropertyAppSource from "../components/examplePropertyApp.tsx?raw";
import {UsageExample} from "../components/usageExample.tsx";

export function TranslatingTextSlide() {
    const {t, i18n} = useTranslation();

    const usedKeys = ["TRANSLATING_TEXT", "FIND_A_PROPERTY", "APP_PRICE", "APP_PRICE_UPPER_BOUND", "APP_NUMERIC_FILTER", "APP_BEDROOMS", "APP_BATHROOMS", "APP_GARAGE", "APP_SEARCH", "APP_BEDROOMS"];
    const code = (lang: string) => usedKeys.reduce<Record<string, string>>((acc, key) => {
        acc[key] = i18n.getResource(lang, "demo", key);
        return acc;
    }, {});

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("TRANSLATING_TEXT")}</h1>
            <p>How is an application actually translated?</p>
            <div className={Styles.split}>
                <div className={"fragment"}>
                    <ExamplePropertyApp lang={"en"}/>
                </div>
                <div>
                    <div className={"fragment"}>
                        <UsageExample type={"incorrect"} explanation={t("TRANSLATING_TEXT_INCORRECT_EXPLANATION")}>
                            <CodeBlock code={ExamplePropertyAppBadSource} lineNumbers={"6,10,15,17|21,23,27,29"}/>
                        </UsageExample>
                    </div>
                </div>
            </div>
        </Slide>
        <Slide>
            <h1>{t("TRANSLATING_TEXT")}</h1>
            <div className={Styles.split}>
                <div>
                    <ExamplePropertyApp lang={"en"}/>
                </div>
                <div>
                    <div>
                        <CodeBlock code={code("en")}/>
                    </div>
                </div>
            </div>
        </Slide>
        <Slide>
            <h1>{t("TRANSLATING_TEXT")}</h1>
            <div className={Styles.split}>
                <div>
                    <ExamplePropertyApp lang={"vi"}/>
                </div>
                <div>
                    <div>
                        <CodeBlock code={code("vi")}/>
                    </div>
                </div>
            </div>
        </Slide>
        <Slide>
            <h1>{t("TRANSLATING_TEXT")}</h1>
            <UsageExample type={"correct"} explanation={t("TRANSLATING_TEXT_CORRECT_EXPLANATION")}>
                <CodeBlock code={ExamplePropertyAppSource} lineNumbers={"12,16,21"} />
            </UsageExample>
        </Slide>
        <Slide>
            <h1>{t("TRANSLATING_TEXT")}</h1>
            {["en", "vi"].map(lang => {
                const t = i18n.getFixedT(lang, "demo");
                return <>
                    <LanguageIdentifier lang={lang} />
                    <div className={Styles.split}>
                        <div>{t("FIND_A_PROPERTY", {ns: "demo"})}</div>
                        <CodeBlock code={`t("FIND_A_PROPERTY")`} />
                        <div>{t("APP_PRICE", {ns: "demo"})}</div>
                        <CodeBlock code={`t("APP_PRICE")`} />
                        <div>{t("APP_GARAGE", {ns: "demo"})}</div>
                        <CodeBlock code={`t("APP_GARAGE")`} />
                    </div>
                </>
            })}
        </Slide>
    </Slide>
}