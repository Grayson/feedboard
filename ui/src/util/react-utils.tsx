import * as React from 'react'
import { Dispatch, createContext } from "react";

export function createContexts<T, U>(): [React.Context<T>, React.Context<Dispatch<U>>] {
	return [
		createContext<T>({} as T),
		createContext<Dispatch<U> >(() => {})
	]		
}
