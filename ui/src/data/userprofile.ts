export default interface UserProfile {
	user: UserData
	following: UserData[]
	feeds: Feed[]
}