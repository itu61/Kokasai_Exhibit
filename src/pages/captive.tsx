import "@mantine/core/styles.css"
import '../App.css'
import {MantineProvider} from "@mantine/core"
import ReactMarkdown from "react-markdown";
import explain from "../assets/explain.ts"

export default function CaptivePage() {
    return (
        <MantineProvider>
            <ReactMarkdown>{explain}</ReactMarkdown>
        </MantineProvider>
    )
}
