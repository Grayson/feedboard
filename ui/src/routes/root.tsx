import * as React from 'react'
import { Link } from 'react-router-dom'
import { LoginState, useUser } from '../state/user'

export default function RootPage() {
	const { loginState, username } = useUser()

	const shouldShowLogin = loginState == LoginState.NotLoggedIn

	return <>
		<p>
			{shouldShowLogin && <Link to={`/login`}>Login</Link> }
			{!shouldShowLogin && `Welcome ${username}`}
		</p>
	</>
}