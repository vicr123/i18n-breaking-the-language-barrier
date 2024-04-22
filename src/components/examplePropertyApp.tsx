import {Trans, useTranslation} from "react-i18next";
import Styles from "./examplePropertyApp.module.css";

export function ExamplePropertyApp({lang}: {
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