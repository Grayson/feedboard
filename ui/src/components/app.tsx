import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { UserProvider } from '../state/user'
import DataRepoProvider from './datarepo'
import Sidebar from './sidebar'

export default function App() {
	return <>
		<header>
			<h1><a href='/'>Feedboard</a></h1>
		</header>
		<UserProvider>
			<DataRepoProvider>
				<div className='d-flex flex-nowrap'>
					<div className='d-flex flex-column flex-shrink-0'>
						<Sidebar />
					</div>
					<main>
						<Outlet />
					</main>
				</div>
			</DataRepoProvider>
		</UserProvider>
	</>
}
