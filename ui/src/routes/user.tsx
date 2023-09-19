import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import { dataRepo } from '../components/datarepo'
import UserProfile from '../data/userprofile'
import Feedlist from '../components/feedlist'
import FriendList from '../components/friendlist'

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
			
			{ (profile.feeds || []).length !== 0 && <Feeds feeds={profile.feeds} />}
			{ (profile.following || []).length !== 0 && <Following users={profile.following} />}
		</div>
	)
}

function Feeds({feeds}: {feeds: Feed[]}) {
	return <>
		<h2>Following feeds</h2>
		<Feedlist feeds={feeds} />
	</>
}

function Following({users}: { users: UserData[] }) {
	return <>
		<h2>Following</h2>
		<FriendList friends={users} />
	</>
}