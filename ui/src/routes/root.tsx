import * as React from 'react'
import { Link } from 'react-router-dom'
import { LoginState, setUserIsLoggedOut, useUser, useUserDispatch } from '../state/user'

export default function RootPage() {
	const { loginState, username } = useUser()

	const shouldShowLogin = loginState == LoginState.NotLoggedIn

	return <>
		{shouldShowLogin && <p><Link to='/login'>Login</Link></p> }
		{!shouldShowLogin && <Welcome username={username} />}
	</>
}

function Welcome({username}: {username: string}) {
	const dispatch = useUserDispatch()

	return <>
		<p>Welcome {username}</p>
		<p><Link to='login' onClick={() => setUserIsLoggedOut(dispatch)()}>Logout</Link></p>
	</>
}
