import * as React from 'react'
import { useContext, useReducer } from "react";
import { createContexts } from '../util/react-utils';

export enum LoginState {
	NotLoggedIn,
	LoggingIn,
	LoggedIn,
	LoggingOut,
}

export interface User {
	name: string
	username: string
	id: number
	loginState: LoginState
}

const initialUser = {
	loginState: LoginState.NotLoggedIn
} as User

interface ReducerAction {}
export class UserLoggingInStateChangedAction implements ReducerAction {
	value: LoginState
	constructor(value: LoginState) { this.value = value }
}
export class UserUsernameChangedAction implements ReducerAction {
	value: string
	constructor(value: string) { this.value = value }
}

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

export function useUser() { return useContext(UserContext) }
export function useUserDispatch() { return useContext(UserDispatchContext) }

export type Dispatcher = React.Dispatch<ReducerAction>

export function setUserIsLoggingIn(dispatch: Dispatcher) {
	return () => {
		dispatch(new UserLoggingInStateChangedAction(LoginState.LoggingIn))
	}
}

export function setUserIsLoggedIn(dispatch: Dispatcher) {
	return () => {
		dispatch(new UserLoggingInStateChangedAction(LoginState.LoggedIn))
	}
}

export function setUserUsername(dispatch: Dispatcher) {
	return (value: string) => {
		dispatch(new UserUsernameChangedAction(value))
	}
}

function reducer(state: User, action: ReducerAction): User {
	if (action instanceof UserLoggingInStateChangedAction) {
		return { ...state, loginState: action.value }
	}
	else if (action instanceof UserUsernameChangedAction) {
		return { ...state, username: action.value }
	}
	return state
}
