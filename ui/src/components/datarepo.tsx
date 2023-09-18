import * as React from 'react'
import { createContext, useContext } from "react";
import DataRepo from '../data/repo';
import MockDataRepo from '../data/mockrepo';

const dataRepo = new MockDataRepo();

const DataRepoContext = createContext<DataRepo>(dataRepo)

export default function DataRepoProvider({children}: {children: React.ReactNode}) {
	return <DataRepoContext.Provider value={dataRepo}>
		{children}
	</DataRepoContext.Provider>
}

export function useDataRepo() {
	return useContext(DataRepoContext)
}
