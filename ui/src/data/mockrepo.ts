import DataRepo from "./repo";
import UserProfile from "./userprofile";

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

const testuser = {
	email: 'test@email.com',
	id: '42',
	name: 'Test User',
	picture_url: '',
	username: 'testuser',
}

const grayson = {
	email: 'grayson@email.com',
	id: '1',
	name: 'Grayson',
	picture_url: '',
	username: 'grayson',
}

const dave = {
	email: 'dave@email.com',
	id: '2',
	name: 'Dave',
	picture_url: '',
	username: 'rsscreator'
}

const demoProfiles: UserProfile[] = [
	{
		feeds: [
			{ description: 'Kottke.org RSS feed', title: 'Kottke.org', url: 'http://feeds.kottke.org/main', webpage: 'https://kottke.org' },
			{ description: 'Tips, Tricks, and Techniques on using Cascading Style Sheets.', title: 'CSS Tricks', url: 'https://css-tricks.com/feed', webpage: 'https://css-tricks.com' },
			{ description: 'Eric Lippert&#039;s blog', title: 'Fabulous adventures in coding', url: 'https://ericlippert.com/feed/', webpage: 'https://ericlippert.com' },
		],
		user: testuser,
		following: [ grayson, dave ]
	},
	{
		feeds: [
			{ description: 'Allen Pike\'s Blog', title: "Allen Pike", webpage: "https://www.allenpike.com/",  url: "https://feeds.allenpike.com/feed" },
			{ description: 'Becky\'s blog', title: "Becky Hansmeyer", webpage: "https://www.beckyhansmeyer.com/", url: "https://www.beckyhansmeyer.com/feed/" },
			{ description: 'Art stuff', title: "Colossal", webpage: "https://www.thisiscolossal.com/",  url: "https://www.thisiscolossal.com/feed/" },
			{ description: 'CHOCKLOCK', title: "Craig Hockenberry", webpage: "https://furbo.org/",  url: "https://furbo.org/feed/json" },
			{ description: 'A blog about tech, mostly Apple.', title: "Daring Fireball", webpage: "https://daringfireball.net/", url: "https://daringfireball.net/feeds/json" },
			{ description: 'From the creator of NetNewsWire', title: "inessential ",webpage: "https://inessential.com/",  url: "https://inessential.com/feed.json" },
		],
		user: grayson,
		following: [ dave ]
	},
	{
		feeds: [
			{ description: 'Kottke.org RSS feed', title: 'https://kottke.org', url: 'http://feeds.kottke.org/main', webpage: 'https://kottke.org' },
			{ description: 'Tips, Tricks, and Techniques on using Cascading Style Sheets.', title: 'CSS Tricks', url: 'https://css-tricks.com/feed', webpage: 'https://css-tricks.com' },
			{ description: 'Eric Lippert&#039;s blog', title: 'Fabulous adventures in coding', url: 'https://ericlippert.com/feed/', webpage: 'https://ericlippert.com' },
		],
		user: dave,
		following: []
	}

]

export default class MockDataRepo implements DataRepo {
	fetchRecommendationsForUsername(username: string): Promise<UserRecommendation[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(defaultList), Math.random() * 1000)
		})
	}
	
	authenticateUser({username, password}: { username: string, password: string }): Promise<UserData | null> {
		return new Promise(resolve => {
			const users = demoProfiles.filter(p => p.user.username === username)
			setTimeout(() => resolve(users.length > 0 ? users[0].user : null), Math.random() * 1000)
		})
	}

	fetchUserProfile(username: string): Promise<UserProfile | null> {
		return new Promise(resolve => {
			const users = demoProfiles.filter(p => p.user.username === username)
			setTimeout(() => resolve(users.length > 0 ? users[0] : null), Math.random() * 1000)
		})
	}
}