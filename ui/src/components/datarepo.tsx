import * as React from 'react'
import { createContext, useContext } from "react";
import DataRepo from '../data/repo';
import MockDataRepo from '../data/mockrepo';

export const dataRepo = new MockDataRepo(); // Exported for use in loaders

const DataRepoContext = createContext<DataRepo>(dataRepo)

export default function DataRepoProvider({children}: {children: React.ReactNode}) {
	return <DataRepoContext.Provider value={dataRepo}>
		{children}
	</DataRepoContext.Provider>
}

export function useDataRepo() {
	return useContext(DataRepoContext)
}
