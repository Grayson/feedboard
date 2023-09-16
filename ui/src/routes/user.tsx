import * as React from 'react'
import { useLoaderData } from 'react-router-dom'

type Params = {
	userId: string
}

export async function loader({ params }: LoaderParams<Params>) {
	const { userId } = params
	return { userId }
}

export default function User() {
	const { userId } = useLoaderData() as { userId: string }
	return (
		<div className='user'>
			<h1>User Name</h1>
			<p>Id: {userId}</p>
		</div>
	)
}