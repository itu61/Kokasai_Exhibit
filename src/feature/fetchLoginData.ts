export type LoginData = { url: string, pass: string, id: string }

export default async function fetchLoginData(): Promise<LoginData[]> {
    const rawData = await (await fetch("http://localhost:3000/all-id")).json()
    const loginData = []
    for(let i = 0; i.toString() in rawData; i++) {
        const x = rawData[i]
        loginData.push({url: x.url as string, id: x.id as string, pass: x.pass as string})
    }
    return loginData
}