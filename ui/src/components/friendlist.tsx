import * as React from 'react'
import { Link } from 'react-router-dom'

export default function FriendList({friends}: {friends: UserData[]}) {
	return <ul className='friend-list'>
		{ friends.map( (f, i) => <FriendItem key={i} friend={f} />)}
	</ul>
}

export function FriendItem({friend}: {friend: UserData}) {
	return <li><Link to={`/user/${friend.username}`}>{friend.name}</Link></li>
}