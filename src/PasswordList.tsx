import { Table, Text } from '@mantine/core';
import {useState, useEffect} from "react";
import fetchLoginData, {type LoginData} from "./feature/fetchLoginData.ts";

export default function PasswordList() {
    const [loginData, setLoginData] = useState<LoginData[]>();

    useEffect(() => {
        const interval = setInterval(() => {
            fetchLoginData().then(setLoginData)
        }, 30000)
        return () => clearInterval(interval)
    })

    const rows = () => (loginData?.reverse() ?? []).map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.url}</Table.Td>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.pass}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
        <Text style={{fontSize: "14px"}}>流出したログイン情報数: {loginData?.length}</Text>
        <Table striped width={"80%"}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>URL</Table.Th>
                    <Table.Th>ユーザーID</Table.Th>
                    <Table.Th>パスワード</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows()}</Table.Tbody>
        </Table>
        </>
    );
}