import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextProps {
  isSingleCardVisible: boolean
  showSingleCard: () => void
  hideSingleCard: () => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSingleCardVisible, setSingleCardVisibility] = useState(false)

  const showSingleCard = () => {
    setSingleCardVisibility(true)
  }

  const hideSingleCard = () => {
    setSingleCardVisibility(false)
  }

  return (
    <AppContext.Provider
      value={{ isSingleCardVisible, showSingleCard, hideSingleCard }}
    >
      {children}
    </AppContext.Provider>
  )
}
