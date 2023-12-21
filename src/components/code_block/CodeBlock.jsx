import { CopyBlock, dracula } from "react-code-blocks"

const CodeBlock = ({ code, language = "jsx" }) => {
    return (
        <CopyBlock
            text={code}
            language={language}
            showLineNumbers={true}
            theme={dracula}
        />
    )
}

export default CodeBlock