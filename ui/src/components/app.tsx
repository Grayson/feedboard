import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { UserProvider } from '../state/user'

export default function App() {
	return <>
		<h1>Feedboard</h1>
		<UserProvider>
			<Outlet />
		</UserProvider>
	</>
}
