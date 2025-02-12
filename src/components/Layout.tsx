import React from 'react'

interface ILayoutProps {
    children : React.ReactNode
}
function Layout({children}:ILayoutProps) {
  return (
    <div >{children}</div>
  )
}

export default Layout