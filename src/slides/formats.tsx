import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

export function FormatsSlide() {
    const {t} = useTranslation();

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("FORMATS")}</h1>
            <p></p>

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
            <div className="fragment" style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <span>Section 1</span>
                <span>Section 2</span>
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