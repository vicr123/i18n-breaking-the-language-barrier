import {ReactNode} from "react";

import Styles from "./usageExample.module.css";
import {useTranslation} from "react-i18next";
import {Twemoji} from "./twemoji.tsx";

export function UsageExample({children, type, explanation}: {
    children: ReactNode,
    type: "correct" | "incorrect",
    explanation?: string
}) {
    const {t} = useTranslation();

    let usageText;
    switch (type) {
        case "correct":
            usageText = <>
                <Twemoji emoji={"👍"} />
                {t("USAGE_CORRECT")}{explanation ? `: ${explanation}` : ""}
            </>;
            break;
        case "incorrect":
            usageText = <>
                <Twemoji emoji={"👎"} />
                {t("USAGE_INCORRECT")}{explanation ? `: ${explanation}` : ""}
            </>;
            break;

    }

    return <div className={`${Styles[type]} ${Styles.usageExample}`}>
        {children}
        <div className={Styles.usageExampleText}>{usageText}</div>
    </div>
}