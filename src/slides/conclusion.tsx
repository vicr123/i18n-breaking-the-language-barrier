import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";

export function ConclusionSlide() {
    const {t} = useTranslation();

    return <Slide>
        <h1>{t("FINAL_SLIDE_TITLE")}</h1>
        {/*  Add a link to the published website where these slides are hosted  */}

        {/*  Add a link to GitHub  */}

        {/*  Add a link to i18next  */}


        <aside className="notes">
            Don't forget to remind everyone that i18next is not
            mandatory and that there are lots of i18n
            libraries for use everywhere
        </aside>
    </Slide>
}