
export default interface DataRepo {
	fetchRecommendationsForUsername(username: string): Promise<UserRecommendation[]>
}
