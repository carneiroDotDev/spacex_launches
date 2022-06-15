import { createContext, ReactNode } from "react"

interface iData {
  page: number
}

export const store = createContext<iData>({ page: 1 })

const PageProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const obj = { page: 1 }
  return <store.Provider value={obj}>{children}</store.Provider>
}

export default PageProvider
