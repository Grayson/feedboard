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
	email: string
	id: string
	loginState: LoginState
	name: string
	username: string
}

const UserLocalStorageKey = 'user'

const initialUser = (() => {
	const userJson = localStorage.getItem(UserLocalStorageKey)
	if (!userJson) {
		return 	{ loginState: LoginState.NotLoggedIn } as User
	}
	return JSON.parse(userJson)
})()

interface ReducerAction {}

export class UserLoggingInStateChangedAction implements ReducerAction {
	value: LoginState
	constructor(value: LoginState) { this.value = value }
}

interface BasicUserInfoProps {
	email: string
	id: string
	name: string
	username: string
}

export class UserInformationChanged implements ReducerAction {
	email: string
	id: string
	name: string
	username: string
	constructor({email, id, name, username}: BasicUserInfoProps) {
		this.email = email
		this.id = id
		this.name = name
		this.username = username
	}
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

export function setUserIsLoggedOut(dispatch: Dispatcher) {
	return () => {
		localStorage.removeItem(UserLocalStorageKey)
		dispatch(new UserLoggingInStateChangedAction(LoginState.NotLoggedIn))
	}
}

export function setUserInformation(dispatch: Dispatcher) {
	return (props: BasicUserInfoProps) => {
		localStorage.setItem(UserLocalStorageKey, JSON.stringify(props))
		dispatch(new UserInformationChanged(props))
	}
}

function reducer(state: User, action: ReducerAction): User {
	if (action instanceof UserLoggingInStateChangedAction) {
		return { ...state, loginState: action.value }
	}
	else if (action instanceof UserInformationChanged) {
		return { ...state, email: action.email, id: action.id, name: action.name, username: action.username }
	}
	return state
}
