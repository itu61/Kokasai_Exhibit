import "@mantine/core/styles.css"
import '../App.css'
import {MantineProvider} from "@mantine/core"
import ReactMarkdown from "react-markdown";
import details from "../assets/warning.ts"

export default function WarningPage() {
    return (
        <MantineProvider>
            <ReactMarkdown>{details}</ReactMarkdown>
        </MantineProvider>
    )
}
