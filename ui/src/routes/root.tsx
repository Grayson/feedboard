import * as React from 'react'
import { Link } from 'react-router-dom'

export default function RootPage() {
	return <>
		<h1>Feedboard</h1>
		<p>
			<Link to={`/login`}>Login</Link>
		</p>
	</>
}