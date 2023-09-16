import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';

import "./styles.css";
import RootPage from './routes/root';
import Error from './error';

const router = createBrowserRouter([
	{ path: "/", element: <RootPage />, errorElement: <Error /> }
])

var mountNode = document.getElementById("app");
ReactDOM.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>, mountNode);
