import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

const DarkLight = () => {
  const { resolvedTheme, theme, setTheme } = useTheme()
  const handleThemeChange = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    // window.location.reload()
  }

  return (
    <>
      <button className="text-2xl" onClick={handleThemeChange}>
        {theme === 'light' ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </>
  )
}

export default DarkLight
