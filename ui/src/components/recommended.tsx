import * as React from 'react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDataRepo } from './datarepo'

export default function Recommended({forUser: username}: {forUser: string}) {
	const [recommendations, setRecommendations] = useState<UserRecommendation[] | undefined>(undefined)
	const sorted = (recommendations || []).sort((l, r) => l.rank - r.rank)
	return <div className='recommendations'>
		<h2>Recommendations</h2>
		{ recommendations == undefined
			? <Loading setRecommendations={setRecommendations} username={username} />
			: <ul>{ sorted.map((r, idx) => <Recommendation recommendation={r} key={idx} />) }</ul>
		}
	</div>
}

interface LoadingParams {
	username: string
	setRecommendations: Dispatch<SetStateAction<UserRecommendation[] | undefined>>
}

function Loading({username, setRecommendations}: LoadingParams) {
	const dataRepo = useDataRepo()

	useEffect(() => {
		(async () => {
			const recommendations = await dataRepo.fetchRecommendationsForUsername(username)
			setRecommendations(recommendations)
		})()
	}, [])

	return <p>Loading...</p>
}

export function Recommendation({ recommendation }: {recommendation: UserRecommendation}) {
	return <p>
		<a href={recommendation.html}>{recommendation.title}</a> <a href={recommendation.feed}>[Feed]</a>
	</p>
}