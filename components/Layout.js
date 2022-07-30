import React from 'react'
import ThemeToggler from '../src/ThemeToggler'

const Layout = ({children}) => {
  return (
    <div className="container mx-auto max-w-[1200px]">
        <ThemeToggler />
        {children}
    </div>
  )
}

export default Layout