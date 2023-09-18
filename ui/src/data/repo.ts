
export default interface DataRepo {
	authenticateUser({username, password}: { username: string, password: string }): Promise<UserData | null>
	fetchRecommendationsForUsername(username: string): Promise<UserRecommendation[]>
	authenticateUser({username, password}: { username: string, password: string }): Promise<UserData>
}
