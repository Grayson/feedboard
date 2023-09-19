import * as React from 'react'
import RssIcon from './rss-icon'

export default function Feedlist({feeds}: {feeds: Feed[]}) {
	return <div className='feed-list'>
		{ feeds.map( (f, i) => <FeedItem key={i} feed={f} />)}
	</div>
}

export function FeedItem({feed}: {feed: Feed}) {
	return <div className='item'>
			<p><a href={feed.url}><RssIcon /></a> <a href={feed.url}>{feed.title}</a></p>
			<p>{feed.description}</p>
		</div>
}