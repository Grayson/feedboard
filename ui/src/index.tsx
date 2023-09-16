import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';

import "./styles.css";
import RootPage from './routes/root';
import Error from './error';
import Login from './routes/login';

const router = createBrowserRouter([
	{ path: "/", element: <RootPage />, errorElement: <Error /> },
	{ path: "/login", element: <Login /> },
])

var mountNode = document.getElementById("app");
ReactDOM.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>, mountNode);
