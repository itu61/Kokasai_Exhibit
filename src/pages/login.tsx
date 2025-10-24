import "@mantine/core/styles.css"
import '../App.css'
import {Button, MantineProvider, PasswordInput, Space, TextInput, Text} from "@mantine/core"
import {useState} from "react"
import submitForm from "../feature/submitForm.ts"
import {useNavigate} from "react-router";

export type LoginForm = { id?: string, password?: string }
export default function LoginPage() {
    const [loginData, setLoginData] = useState<LoginForm>({id: undefined, password: undefined});
    const navigate = useNavigate();
    const handleSubmit = () => {
        const domain = window.location.href.split("/").at(2)
        submitForm(loginData, domain)
        navigate("/warning")
    }
    return (
        <MantineProvider>
            <Text size={"lg"}>電算部セキュリティ班 / 「ログイン情報の流出を体験してみよう！」</Text>
            <Text>(偽)ログイン画面</Text>
            <TextInput
            label="ログインID"
            placeholder="ログインIDを入力"
            description="※実在するサービスで使用しているIDを入力しないでください！"
            onChange={e => setLoginData({...loginData, id: e.currentTarget.value})}
            value={loginData?.id}
            />

            <PasswordInput
                label="パスワード"
                placeholder="パスワードを入力"
                description="※実在するサービスで使用しているパスワードを入力しないでください！"
                onChange={e => setLoginData({...loginData, password: e.currentTarget.value})}
                value={loginData?.password}
            />
            <Space h={"md"}></Space>
            <Button variant="outline" color="teal" onClick={handleSubmit} >送信</Button>
        </MantineProvider>
    )
}