import * as React from 'react'
import { useEffect, useState } from 'react'

// Stolen from https://github.com/Ranchero-Software/NetNewsWire/blob/5e3086667d91ef5b92597f44215cd90785052bd2/Shared/Importers/DefaultFeeds.opml
const defaultList = [
	{ title: "BBC News - World", html: "https://www.bbc.com/news", feed: "https://feeds.bbci.co.uk/news/world/rss.xml"},
	{ title: "Allen Pike", html: "https://www.allenpike.com/",  feed: "https://feeds.allenpike.com/feed"},
	{ title: "Becky Hansmeyer", html: "https://www.beckyhansmeyer.com/", feed: "https://www.beckyhansmeyer.com/feed/"},
	{ title: "Colossal", html: "https://www.thisiscolossal.com/",  feed: "https://www.thisiscolossal.com/feed/"},
	{ title: "Craig Hockenberry", html: "https://furbo.org/",  feed: "https://furbo.org/feed/json"},
	{ title: "Daring Fireball", html: "https://daringfireball.net/", feed: "https://daringfireball.net/feeds/json"},
	{ title: "inessential ",html: "https://inessential.com/",  feed: "https://inessential.com/feed.json"},
	{ title: "Jason Kottke", html: "https://kottke.org/", feed: "http://feeds.kottke.org/json"},
	{ title: "Julia Evans", html: "https://jvns.ca/", feed: "https://jvns.ca/atom.xml"},
	{ title: "Manton Reece",html: "https://manton.org/",  feed: "https://www.manton.org/feed/json"},
	{ title: "Maurice Parker", html: "https://vincode.io/", feed: "https://vincode.io/feed.xml"},
	{ title: "Michael Tsai", html: "https://mjtsai.com/blog/", feed: "https://mjtsai.com/blog/feed/"},
	{ title: "NetNewsWire Blog", html: "https://netnewswire.blog/", feed: "https://netnewswire.blog/feed.json"},
	{ title: "One Foot Tsunami", html: "https://onefoottsunami.com/", feed: "https://onefoottsunami.com/feed/json/"},
	{ title: "Six Colors", html: "https://sixcolors.com/", feed: "https://feedpress.me/sixcolors?type=xml"},
]

interface UserRecommendation {
	title: string
	html: string
	feed: string
	// source? from (object)?
}

export default function Recommended({forUser}: {forUser: string}) {
	const [recommendations, setRecommendations] = useState<UserRecommendation[] | undefined>(undefined)
	useEffect(() => {
		// mimic fetch
		setTimeout(() => setRecommendations(defaultList), 1000)
	}, [forUser])

	return <div className='recommendations'>
		<h2>Recommendations</h2>
		{ recommendations == undefined
			? <p>Loading...</p>
			: <ul>{ recommendations!.map(r => <Recommendation recommendation={r} />) }</ul>
		}
	</div>
}

export function Recommendation({ recommendation }: {recommendation: UserRecommendation}) {
	return <p>
		<a href={recommendation.html}>{recommendation.title}</a> <a href={recommendation.feed}>[Feed]</a>
	</p>
}