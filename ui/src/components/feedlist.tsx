import * as React from 'react'

export default function Feedlist({feeds}: {feeds: Feed[]}) {
	return <div className='feed-list'>
		{ feeds.map( (f, i) => <FeedItem key={i} feed={f} />)}
	</div>
}

export function FeedItem({feed}: {feed: Feed}) {
	return <div className='item'>
			<h3><a href={feed.url}>{feed.title}</a></h3>
			<p>{feed.description}</p>
			<p><a href={feed.url}>[Feed]</a></p>
		</div>
}