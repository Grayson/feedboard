import * as React from 'react'
import { Form } from 'react-router-dom'

export default function Login() {
	return (
		<div id="login">
			<Form action="/user/42" method='get' /* to be post */>
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