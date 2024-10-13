import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { ThemeType, darkTheme, lightTheme } from '../styles/themes'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
    theme: Theme,
    themeStyles: ThemeType,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';
    document.body.style.color = theme === 'dark' ? 'white' : 'black';
}, [theme])

  const toggleTheme = () => { setTheme((currTheme) => currTheme === 'dark' ? 'light' : 'dark') }

  const themeStyles = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{theme, themeStyles, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}