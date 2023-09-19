import * as React from 'react'
import { LoginState, setUserIsLoggedOut, useUser, useUserDispatch } from '../state/user'
import { Link } from 'react-router-dom'

export default function Sidebar() {
	const { loginState, username, name } = useUser()

	const shouldShowLogin = loginState == LoginState.NotLoggedIn
	return <div id='sidebar'>
		{shouldShowLogin && <p><Link to='/login'>Login</Link></p> }
		{!shouldShowLogin && <Welcome username={username} name={name} />}
	</div>
}

function Welcome({username, name}: {username: string, name: string}) {
	const dispatch = useUserDispatch()

	return <>
		<p>Welcome <Link to={`user/${username}`}>{name}</Link></p>
		<p><Link to='login' onClick={() => setUserIsLoggedOut(dispatch)()}>Logout</Link></p>
	</>
}
