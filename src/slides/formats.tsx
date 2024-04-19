import {Slide} from "../slide.tsx";

export function FormatsSlide() {
    return <Slide data-background-color="rgb(100, 0, 0)">
        <h1>Formats</h1>
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
}