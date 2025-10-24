import type { LoginForm } from "../pages/login.tsx"

export default function submitForm(formData: LoginForm, domain: string) {
    if (formData.id && formData.password) {
        fetch(`http://localhost:3000/login/${formData.id}/${formData.password}/${domain}`, {method: 'POST'})
    }
}