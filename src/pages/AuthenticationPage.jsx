import { redirect } from 'react-router-dom'
import { AuthForm } from '../components/AuthForm'
import { AUTH_MODE } from '../constants'
import { login, saveAuthToken } from '../services/authentication'
import { json } from 'react-router-dom';


export default function AuthenticationPage() { 
	return <AuthForm />
}

export async function action({ request }) {
	const searchParams = new URL(request.url).searchParams
	const mode = searchParams.get("mode") || AUTH_MODE.LOGIN

	if (mode !== AUTH_MODE.LOGIN) { 
		throw new Error("Unsupporte mode")
	}

	const data = await request.formData()

	const authData = {
		email: data.get('email'),
		password: data.get('password'),
	}

	const token = login({authData})

	if (!token) {
		return json({ message: "Invalid credentials. Please, check your email and password." }, { status: 500})
	}

	saveAuthToken({token})

	return redirect('/')

}	