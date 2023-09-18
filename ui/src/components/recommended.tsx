import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDataRepo } from './datarepo'

export default function Recommended({forUser: username}: {forUser: string}) {
	const [recommendations, setRecommendations] = useState<UserRecommendation[] | undefined>(undefined)
			: <ul>{ sorted.map((r, idx) => <Recommendation recommendation={r} key={idx} />) }</ul>
	const dataRepo = useDataRepo()

	useEffect(() => {
		(async () => {
			const recommendations = await dataRepo.fetchRecommendationsForUsername(username)
			setRecommendations(recommendations)
		})()
	}, [])

	const sorted = (recommendations || []).sort((l, r) => l.rank - r.rank)

	return <div className='recommendations'>
		<h2>Recommendations</h2>
		{ recommendations == undefined
			? <p>Loading...</p>
			: <ul>{ sorted.map(r => <Recommendation recommendation={r} />) }</ul>
		}
	</div>
}

export function Recommendation({ recommendation }: {recommendation: UserRecommendation}) {
	return <p>
		<a href={recommendation.html}>{recommendation.title}</a> <a href={recommendation.feed}>[Feed]</a>
	</p>
}