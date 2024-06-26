import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {Fragment, useEffect, useState} from "react";
import {DateTime, DateTimeFormatOptions} from "luxon";
import {LanguageIdentifier} from "../components/languageIdentifier.tsx";

import Styles from "./formats.module.css";

export function FormatsSlide() {
    const {t} = useTranslation();
    const [now, setNow] = useState(DateTime.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(DateTime.now());
        });

        return () => clearInterval(interval);
    })

    const longFormat: DateTimeFormatOptions = {
        dateStyle: "long",
        timeStyle: "long"
    };
    const shortFormat: DateTimeFormatOptions = {
        dateStyle: "short",
        timeStyle: "short"
    };

    const languages = ["en-AU", "en-GB", "en-US", "en-CA", "en-IN", "de-DE", "fi-FI", "ja-JP", "vi-VN", "ar-SA"];

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("FORMATS")}</h1>
            <p>{t("FORMATS_QUESTION_FIRST_DAY_OF_WEEK")}</p>

            <aside className="notes">
                Start this slide off by polling the audience
                What's the first day of the week?

                Not just about languages: there are differences
                even within English!

                Date format US vs. rest of world
                Currency support
                First day of week - mention that it can be confusing
                because it might be different between people
                maybe show of hands: what's the first day of the week?
                Time formats (24 vs. 12)
            </aside>
        </Slide>
        <Slide data-transition={"slide-in fade-out"}>
            <h1>{t("FORMATS")}</h1>
            <div className={Styles.formatsTable}>
                <span />
                <span>{t("FORMAT_LONG_DATE")}</span>
                <span>{t("FORMAT_SHORT_DATE")}</span>
                {languages.map(lang =>
                    <Fragment key={lang}>
                        <LanguageIdentifier lang={lang}/>
                        <span>{now.setLocale(lang).toLocaleString(longFormat)}</span>
                        <span>{now.setLocale(lang).toLocaleString(shortFormat)}</span>
                    </Fragment>)}
            </div>

            <aside className="notes">
                Date format US vs. rest of world
                Currency support
                First day of week
                Time formats (24 vs. 12)
            </aside>
        </Slide>
        <Slide data-transition={"fade-in"}>
            <h1>{t("FORMATS")}</h1>
            <div className={Styles.formatsTable}>
                <span/>
                <span>{t("FORMAT_LARGE_NUMBER")}</span>
                <span>{t("FORMAT_NUMBER_WITH_DECIMALS")}</span>
                {languages.map(lang => {
                    const numberFormat = new Intl.NumberFormat(lang, {maximumFractionDigits: 20});
                    return <Fragment key={lang}>
                        <LanguageIdentifier lang={lang}/>
                        <span>2<sup>32</sup> = {numberFormat.format(4294967296)}</span>
                        <span>π = {numberFormat.format(Math.PI)}</span>
                    </Fragment>;
                })}
            </div>

            <aside className="notes">
                Date format US vs. rest of world
                Currency support
                First day of week
                Time formats (24 vs. 12)
            </aside>
        </Slide>
    </Slide>
}