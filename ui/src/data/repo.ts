
export default interface DataRepo {
	fetchRecommendationsForUsername(username: string): Promise<UserRecommendation[]>
	authenticateUser({username, password}: { username: string, password: string }): Promise<UserData>
}
