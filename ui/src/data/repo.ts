import UserProfile from "./userprofile"

export default interface DataRepo {
	authenticateUser({username, password}: { username: string, password: string }): Promise<UserData | null>
	fetchRecommendationsForUsername(username: string): Promise<UserRecommendation[]>
	fetchUserProfile(username: string): Promise<UserProfile | null>
}
