import Styles from "./app.module.css"
import { RevealSlides } from "react-reveal-slides"

// Make sure reveal.js is installed with npm for the following imports to work
// Plugins
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";

import "reveal.js/plugin/highlight/monokai.css";
import "reveal.js/dist/reveal.css"
import "reveal.js/dist/reset.css"
import "reveal.js/dist/theme/black.css";
import {Slide} from "./slide.tsx";
import {PluralsSlide} from "./slides/plurals.tsx";
import {InterpolationSlide} from "./slides/interpolation.tsx";

function App() {
    return <div className={Styles.root}>
        <RevealSlides controls={true}
                      hash={true}
                      controlsLayout={"bottom-right"}
                      plugins={[RevealMarkdown, RevealZoom, RevealNotes]}
                      center={false}
                      width={1920}
                      height={1080}
        >
            <Slide>
                <h1>i18n</h1>
                <h3>Breaking the language barrier</h3>

                <aside className="notes">
                    Speaker notes go here
                </aside>
            </Slide>
            <Slide>
                <h1>i18n?</h1>
                <div>Internationalisation</div>
            </Slide>
            <Slide data-background-color="rgb(100, 0, 0)" data-background-transition="zoom">
                <h1>Language is nuanced</h1>
            </Slide>
            <InterpolationSlide />
            <PluralsSlide />
            <Slide data-background-color="rgb(100, 0, 0)" data-background-transition="zoom">
                <h1>Formats</h1>
                <div className="fragment" style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                    <span>Section 1</span>
                    <span>Section 2</span>
                </div>
            </Slide>
            <Slide data-background-color="rgb(100, 0, 0)" data-background-transition="zoom">
                <h1>Some other things to think about</h1>
                <ul>
                    <li className="fragment">Font support</li>
                    <li className="fragment">Icons</li>
                    <li className="fragment">Bidirectionality</li>
                </ul>
            </Slide>
            <Slide data-background-color="rgb(0, 100, 200)" data-background-transition="zoom">
                <h1>A library</h1>
                <p className="fragment">Fragment</p>
            </Slide>
            <Slide>
                <h1>Questions?</h1>
            </Slide>
        </RevealSlides>
    </div>
}

export default App
