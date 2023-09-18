import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { UserProvider } from '../state/user'
import DataRepoProvider from './datarepo'

export default function App() {
	return <>
		<h1>Feedboard</h1>
		<UserProvider>
			<DataRepoProvider>
				<Outlet />
			</DataRepoProvider>
		</UserProvider>
	</>
}
