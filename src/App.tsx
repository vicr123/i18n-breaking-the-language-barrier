import Styles from "./app.module.css"
import { RevealSlides } from "react-reveal-slides"

// Make sure reveal.js is installed with npm for the following imports to work
// Plugins
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";

import "reveal.js/plugin/highlight/monokai.css";
import "reveal.js/dist/theme/black.css";

import {Slide} from "./slide.tsx";
import {PluralsSlide} from "./slides/plurals.tsx";
import {InterpolationSlide} from "./slides/interpolation.tsx";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import {TitleSlide} from "./slides/title.tsx";
import {DefaultSlide} from "./slides/intro.tsx";
import {QuestionsSlide} from "./slides/questions.tsx";
import {I18nextSlide} from "./slides/i18next.tsx";
import { FormatsSlide } from "./slides/formats.tsx";
import {CtaSlide} from "./slides/cta.tsx";
import {BidiSlide} from "./slides/bidi.tsx";
import {ConclusionSlide} from "./slides/conclusion.tsx";
import {useTranslation} from "react-i18next";

function App() {
    const {i18n} = useTranslation();

    return <div className={Styles.root} dir={i18n.dir()}>
        <RevealSlides controls={true}
                      hash={true}
                      controlsLayout={"bottom-right"}
                      plugins={[RevealMarkdown, RevealZoom, RevealNotes, RevealHighlight]}
                      center={false}
                      width={1920}
                      height={1080}
                      rtl={i18n.dir() == "rtl"}
        >
            <TitleSlide />
            <DefaultSlide />
            <Slide data-background-color="rgb(100, 0, 0)" data-background-transition="zoom">
                <h1>Language is nuanced</h1>
            </Slide>
            <I18nextSlide />
            <InterpolationSlide />
            <PluralsSlide />
            <FormatsSlide />
            <BidiSlide />
            <Slide data-background-color="rgb(100, 0, 0)">
                <h1>Some other things to think about</h1>
                <ul>
                    <li className="fragment">Font support</li>
                    <li className="fragment">Sizing and designs</li>
                    <li className="fragment">Icons</li>
                    <li className="fragment">Eastern Arabic numbers</li>
                {/*  If I do a slide on numbers we'll talk about the comma too  */}
                </ul>
            </Slide>
            <CtaSlide/>
            <ConclusionSlide />
            <QuestionsSlide />
        </RevealSlides>
    </div>
}

export default App
