import "@mantine/core/styles.css"
import '../App.css'
import PasswordList from "../PasswordList.tsx"
import {MantineProvider, Text} from "@mantine/core"

function MonitorPage() {
  return (
    <MantineProvider>
        <Text size={"lg"}>電算部セキュリティ班 / 「ログイン情報の流出を体験してみよう！」</Text>
        <Text style={{fontSize: "30px"}}
              fw={"900"}
        >
            流出したパスワードの一覧
        </Text>
        <PasswordList />
    </MantineProvider>
  )
}

export default MonitorPage
