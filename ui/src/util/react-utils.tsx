import * as React from 'react'
import { Dispatch, createContext } from "react";

export function createContexts<T, U>(): [React.Context<T | null>, React.Context<Dispatch<U> | null>] {
	return [
		createContext<T | null>(null),
		createContext<Dispatch<U> | null>(null)
	]		
}
