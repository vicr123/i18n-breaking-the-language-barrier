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
        <Slide>
            <h1>{t("FORMATS")}</h1>
            <div className={`${Styles.formatsTable} fragment`}>
                {["en-AU", "en-GB", "en-US", "ja-JP", "vi-VN", "ar-SA"].map(lang => <Fragment key={lang}>
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
    </Slide>
}