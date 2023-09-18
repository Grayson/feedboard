import * as React from 'react'
import { Form, Navigate, SubmitFunction, useActionData, useSubmit } from 'react-router-dom'
import { Dispatcher, LoginState, setUserInformation, setUserIsLoggedIn, setUserIsLoggingIn, useUser, useUserDispatch } from '../state/user'
import { SubmitTarget } from 'react-router-dom/dist/dom'
import { useEffect } from 'react'
import { useDataRepo } from '../components/datarepo'

export async function action({ request }: { request: Request }) {
	const data = await request.formData()
	const username = data.get('username')

	return { username }
}

export default function Login() {
	const { loginState } = useUser()

	if (loginState == LoginState.NotLoggedIn) {
		return <LoginForm />
	}
	else if (loginState == LoginState.LoggedIn) {
		return <Navigate to='/' replace={true} />
	}
	return <LoggingInMessage />
}

function LoginForm() {
	const submit = useSubmit()
	const dispatch = useUserDispatch()

	return (
		<div id="login">
			<Form method='post' onSubmit={() => onFormSubmit(dispatch, submit)}>
				<p>
					<label htmlFor='username'>Username: </label>
					<input type='text' name='username' />
				</p>
				<p>
					<label htmlFor='password'>Password: </label>
					<input type='password' name='password' />
				</p>
				<button type="submit">Login</button>
			</Form>
		</div>
	)	
}

function LoggingInMessage() {
	const dispatch = useUserDispatch()
	const dataRepo = useDataRepo()

	const { username, password } = useActionData() as any || {}
	
	useEffect(() => {
		(async () => {
			const userdata = await dataRepo.authenticateUser({username, password})
			if (!userdata) return
			setUserInformation(dispatch)(userdata)
			setUserIsLoggedIn(dispatch)()
		})()
	}, [username])
	return (
		<div id="logging-in">
			<h2>Welcome, {username}</h2>
			<p>Completing login...</p>
		</div>
	)
}

function onFormSubmit(dispatch: Dispatcher, submit: SubmitFunction) {
	setUserIsLoggingIn(dispatch)()

	return (ev: React.FormEvent<Element>) => {
		submit(ev.currentTarget as SubmitTarget)
	}
}