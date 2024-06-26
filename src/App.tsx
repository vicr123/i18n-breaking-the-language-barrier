import Styles from "./app.module.css"
import { RevealSlides, RevealHandle } from "react-reveal-slides"

// Make sure reveal.js is installed with npm for the following imports to work
// Plugins
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";

import "reveal.js/plugin/highlight/monokai.css";
import "reveal.js/dist/theme/black.css";

import { PluralsSlide } from "./slides/plurals.tsx";
import { InterpolationSlide } from "./slides/interpolation.tsx";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import { TitleSlide } from "./slides/title.tsx";
import { IntroSlide } from "./slides/intro.tsx";
import { QuestionsSlide } from "./slides/questions.tsx";
import { I18nextSlide } from "./slides/i18next.tsx";
import { FormatsSlide } from "./slides/formats.tsx";
import { CtaSlide } from "./slides/cta.tsx";
import { BidiSlide } from "./slides/bidi.tsx";
import { ConclusionSlide } from "./slides/conclusion.tsx";
import { useTranslation } from "react-i18next";
import { TranslatingTextSlide } from "./slides/translatingText.tsx";
import { PluginFunction } from "reveal.js";
import { MoreInformationSlide } from "./slides/moreInformation.tsx";
import {LanguageSlide} from "./slides/language.tsx";
import {TocSlide} from "./slides/toc.tsx";
import {useRef, useState} from "react";

function App() {
    const { i18n } = useTranslation();
    const revealRef = useRef<RevealHandle>(null);
    const [savedSlide, setSavedSlide] = useState<number | null>(null);

    // Override keyboard controls so that it is possible to go through all the slides using a presentation remote
    const keyboard = {
        // Override left arrow key to always go to the previous slide (even vertically)
        37: "prev",
        // Override right arrow key to always go to the next slide (even vertically)
        39: "next",
        // Go to conclusion slide when C is pressed
        67: () => {
            const reveal = revealRef.current?.getReveal();
            if (!reveal) return;

            if (savedSlide) {
                reveal.slide(savedSlide);
                setSavedSlide(null);
            } else {
                setSavedSlide(reveal.getHorizontalSlides().indexOf(reveal.getCurrentSlide()));
                reveal.slide(0);
            }
        }
    };

    const hl: PluginFunction = () => {
        const hl = RevealHighlight();
        return {
            ...hl,
            id: "highlightPatch"
        }
    };

    return <div className={Styles.root} dir={i18n.dir()}>
        <RevealSlides controls={true}
            hash={true}
            controlsLayout={"bottom-right"}
            plugins={[RevealMarkdown, RevealZoom, RevealNotes, hl]}
            center={false}
            width={1920}
            height={1080}
            rtl={i18n.dir() == "rtl"}
            ref={revealRef}
            totalTime={10 * 60}
            // @ts-expect-error Typings for keyboard are incorrect
            keyboard={keyboard}
        >
            <TitleSlide />
            <IntroSlide />
            <LanguageSlide />
            <I18nextSlide />
            <TocSlide />

            <TranslatingTextSlide />
            <InterpolationSlide />
            <PluralsSlide />
            <FormatsSlide />
            <BidiSlide />
            <MoreInformationSlide />

            <CtaSlide />
            <ConclusionSlide />
            <QuestionsSlide />
        </RevealSlides>
    </div>
}

export default App
