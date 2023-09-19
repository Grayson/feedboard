import * as React from 'react';
import { createRoot } from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap'
import RootPage from './routes/root';
import Error from './error';
import Login, { action as loginAction } from './routes/login';
import User, { loader as userLoader } from './routes/user';
import App from './components/app';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ element: <RootPage />, index: true },
			{
				path: 'login',
				element: <Login />,
				action: loginAction as any,
			},
			{ 
				path: 'user/:username',
				element: <User />,
				loader: userLoader as any,
			},
		]
	},
])

const root = createRoot(document.getElementById("app")!)
root.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>)
