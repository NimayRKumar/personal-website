import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

const ThemeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('ThemeToggle must be used within a ThemeProvider');
  }
  
  const { theme, toggleTheme } =  themeContext

  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      {theme === 'dark' ? (<FontAwesomeIcon icon={faSun} size="lg"/>) : (<FontAwesomeIcon icon={faMoon} size="lg"/>)}
    </div>
  )
}

export default ThemeToggle