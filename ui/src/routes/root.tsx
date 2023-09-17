import * as React from 'react'
import { Link } from 'react-router-dom'

export default function RootPage() {
	return <>
		<p>
			<Link to={`/login`}>Login</Link>
		</p>
	</>
}