import {Slide} from "../slide.tsx";
import {Trans, useTranslation} from "react-i18next";

import Styles from "./translatingText.module.css";
import {CodeBlock} from "../components/codeblock.tsx";

function ExamplePropertyApp({lang}: {
    lang: string
}) {
    const {i18n} = useTranslation();
    const t = i18n.getFixedT(lang, "demo");

    return <div className={`${Styles.appRoot}`}>
        <div className={Styles.appHeader}>
            {t("FIND_A_PROPERTY")}
        </div>
        <div className={Styles.appContent}>
            <div className={Styles.appFilter}>
                <span>{t("APP_PRICE")}</span>
                <input type={"range"} max={100} value={85}/>
                <span className={Styles.appValue}>$1,200,000</span>
            </div>
            <div className={Styles.appFilter}>
                <span>{t("APP_BEDROOMS")}</span>
                <div className={Styles.appNumericFilter}>
                    <Trans t={t} i18nKey={"APP_NUMERIC_FILTER"} components={{
                        1: <input type={"number"} value={2}/>,
                        2: <input type={"number"} value={5}/>
                    }}/>
                </div>
            </div>
            <div className={Styles.appFilter}>
                <span>{t("APP_BATHROOMS")}</span>
                <div className={Styles.appNumericFilter}>
                    <Trans t={t} i18nKey={"APP_NUMERIC_FILTER"} components={{
                        1: <input type={"number"} value={2}/>,
                        2: <input type={"number"} value={5}/>
                    }}/>
                </div>
            </div>
            <div className={Styles.appFilter}>
                <span>{t("APP_GARAGE")}</span>
                <div className={Styles.appNumericFilter}>
                    <Trans t={t} i18nKey={"APP_NUMERIC_FILTER"} components={{
                        1: <input type={"number"} value={2}/>,
                        2: <input type={"number"} value={5}/>
                    }}/>
                </div>
            </div>
        </div>
        <div className={Styles.appFooter}>
            <button>{t("APP_SEARCH")}</button>
        </div>
    </div>
}

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
            <div className={Styles.split}>
                <div className={"fragment"}>
                    <ExamplePropertyApp lang={"en"}/>
                </div>
                <div>
                    <div className={"fragment"}>
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
    </Slide>
}