import * as React from 'react'

export default function FriendList({friends}: {friends: UserData[]}) {
	return <ul className='friend-list'>
		{ friends.map( (f, i) => <FriendItem key={i} friend={f} />)}
	</ul>
}

export function FriendItem({friend}: {friend: UserData}) {
	return <li><a href={`/user/${friend.username}`}>{friend.name}</a></li>
}