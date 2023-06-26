import users from '../mocks/user.json'
import { redirect } from 'react-router-dom'

export const login = ({ authData }) => {
	
	for (const user of users) { 
		if (user.email === authData.email && user.password === authData.password) {
			const token = Math.random().toString(36).substr(2)
			return token
		}	
	}
	
	return null
}


export const getAuthToken = () => {
	const token = localStorage.getItem('token')
	return token
}

export const saveAuthToken = ({token}) => { 
	localStorage.setItem('token', token)
}

export const tokenLoader = ()=> { 
	return getAuthToken();

}