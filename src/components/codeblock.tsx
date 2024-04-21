export function CodeBlock({code, lineNumbers}: {
    code: string | object,
    lineNumbers?: string
}) {
    let render = code;
    if (typeof render == "object") {
        render = JSON.stringify(render, null, 4);
    }

    return <pre>
        <code data-trim={""} data-noescape={""} data-line-numbers={lineNumbers}>
            {render}
        </code>
    </pre>
}