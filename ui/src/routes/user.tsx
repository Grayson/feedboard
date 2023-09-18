import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import { dataRepo } from '../components/datarepo'
import UserProfile from '../data/userprofile'
import Feedlist from '../components/feedlist'

type Params = {
	username: string
}

export async function loader({ params }: LoaderParams<Params>) {
	const { username } = params
	return dataRepo.fetchUserProfile(username)
}

export default function User() {
	const profile = useLoaderData() as UserProfile

	return (
		<div className='user'>
			<h1>{profile.user.name} ({profile.user.username})</h1>
			<img src={profile.user.picture_url} />
			
			<h2>Following feeds</h2>
			<Feedlist feeds={profile.feeds} />
		</div>
	)
}