import {Slide} from "../slide.tsx";
import {useTranslation} from "react-i18next";
import {InterpolationPart} from "../components/InterpolationPart.tsx";

export function BidiSlide() {
    const {t} = useTranslation();

    return <Slide data-background-color="rgb(29, 83, 110)">
        <Slide>
            <h1>{t("BIDIRECTIONALITY")}</h1>
            <div className={"fragment"}>
                <p>Examples of languages that read from right to left:</p>
                <ul>
                    <li>Arabic</li>
                    <li>Hebrew</li>
                    <li>Persian</li>
                    <li>Yiddish</li>
                </ul>
            </div>
        </Slide>
        <Slide>
            <h1>{t("BIDIRECTIONALITY")}</h1>

            <InterpolationPart languages={["en", "he"]}/>

            <aside className="notes" data-markdown={""}>
                be'ezrat NAME tikanti et habag
                A is always short A
            </aside>
        </Slide>
    </Slide>
}