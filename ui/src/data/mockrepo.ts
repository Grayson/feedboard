import { User } from "../state/user";
import DataRepo from "./repo";

// Stolen from https://github.com/Ranchero-Software/NetNewsWire/blob/5e3086667d91ef5b92597f44215cd90785052bd2/Shared/Importers/DefaultFeeds.opml
const defaultList = [
	{ title: "BBC News - World", html: "https://www.bbc.com/news", feed: "https://feeds.bbci.co.uk/news/world/rss.xml", rank: 11},
	{ title: "Allen Pike", html: "https://www.allenpike.com/",  feed: "https://feeds.allenpike.com/feed", rank: 1},
	{ title: "Becky Hansmeyer", html: "https://www.beckyhansmeyer.com/", feed: "https://www.beckyhansmeyer.com/feed/", rank: 2},
	{ title: "Colossal", html: "https://www.thisiscolossal.com/",  feed: "https://www.thisiscolossal.com/feed/", rank: 3},
	{ title: "Craig Hockenberry", html: "https://furbo.org/",  feed: "https://furbo.org/feed/json", rank: 4},
	{ title: "Daring Fireball", html: "https://daringfireball.net/", feed: "https://daringfireball.net/feeds/json", rank: 5},
	{ title: "inessential ",html: "https://inessential.com/",  feed: "https://inessential.com/feed.json", rank: 6},
	{ title: "Jason Kottke", html: "https://kottke.org/", feed: "http://feeds.kottke.org/json", rank: 7},
	{ title: "Julia Evans", html: "https://jvns.ca/", feed: "https://jvns.ca/atom.xml", rank: 10},
	{ title: "Manton Reece",html: "https://manton.org/",  feed: "https://www.manton.org/feed/json", rank: 8},
	{ title: "Maurice Parker", html: "https://vincode.io/", feed: "https://vincode.io/feed.xml", rank: 9},
	{ title: "Michael Tsai", html: "https://mjtsai.com/blog/", feed: "https://mjtsai.com/blog/feed/", rank: 12},
	{ title: "NetNewsWire Blog", html: "https://netnewswire.blog/", feed: "https://netnewswire.blog/feed.json", rank: 15},
	{ title: "One Foot Tsunami", html: "https://onefoottsunami.com/", feed: "https://onefoottsunami.com/feed/json/", rank: 14},
	{ title: "Six Colors", html: "https://sixcolors.com/", feed: "https://feedpress.me/sixcolors?type=xml", rank: 13},
]

const demoUserData = {
	email: "test@email.com",
	id: "42",
	name: "Test User",
	username: "testuser",
}

export default class MockDataRepo implements DataRepo {
	fetchRecommendationsForUsername(username: string): Promise<UserRecommendation[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(defaultList), Math.random() * 1000)
		})
	}
	
	authenticateUser({username, password}: { username: string, password: string }): Promise<UserData | null> {
		return new Promise(resolve => {
			setTimeout(() => resolve(demoUserData), Math.random() * 1000)
		})
	}
}