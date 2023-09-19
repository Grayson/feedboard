import * as React from 'react'
import { useUser } from '../state/user'
import Recommended from '../components/recommended'

export default function RootPage() {
	const { username } = useUser()

	return <>
		<Recommended forUser={username} />
	</>
}
