import * as React from 'react'
import { Link } from 'react-router-dom'
import { LoginState, setUserIsLoggedOut, useUser, useUserDispatch } from '../state/user'
import Recommended from '../components/recommended'

export default function RootPage() {
	const { loginState, username, name } = useUser()

	const shouldShowLogin = loginState == LoginState.NotLoggedIn

	return <>
		{shouldShowLogin && <p><Link to='/login'>Login</Link></p> }
		{!shouldShowLogin && <Welcome username={username} name={name} />}
	</>
}

function Welcome({username, name}: {username: string, name: string}) {
	const dispatch = useUserDispatch()

	return <>
		<p>Welcome {name}</p>
		<p><Link to={`user/${username}`}>User Page</Link></p>
		<p><Link to='login' onClick={() => setUserIsLoggedOut(dispatch)()}>Logout</Link></p>
		<Recommended forUser={username} />
	</>
}
