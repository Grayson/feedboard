import * as React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
	const err = useRouteError()
	return <div className="error">
			<h1>Error</h1>
			<p>An error has occurred:</p>
			<p>{err.statusText || err.message }</p>
		</div>
}