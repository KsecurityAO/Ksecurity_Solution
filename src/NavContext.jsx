import React from 'react'

export const NavContext=React.createContext()

export const MenuContext = ({children}) => {
  const [menu, setMenu]=React.useState(true)
  return (
    <>
    <NavContext.Provider value={{menu, setMenu}}>
      {children}
    </NavContext.Provider>
    </>
  )
}
