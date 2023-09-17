import * as React from 'react'
import { useReducer } from "react";
import { createContexts } from '../util/react-utils';

export interface User {
	name: string
	id: number
}

interface ReducerAction {
	action: string
}

const initialUser = {} as User

const [
	UserContext,
	UserDispatchContext
] = createContexts<User, ReducerAction>()

export function UserProvider({children} : { children: React.ReactNode }) {
	const [user, dispatch] = useReducer(reducer, initialUser)
	return (
		<UserContext.Provider value={user}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	)
}

function reducer(state: User, action: ReducerAction): User {
	return initialUser
}
