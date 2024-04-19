import {ReactNode} from "react";

import Styles from "./slide.module.css";

export function Slide(props: {
    children: ReactNode,
    [key: string]: string | ReactNode
}) {
    return <section className={Styles.slide} {...props}>
        {props.children}
    </section>
}