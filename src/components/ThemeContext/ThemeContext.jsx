import React, { useContext, useEffect, useState } from 'react'

export const ThemeContext = React.createContext()
export const ThemeUpdateContext= React.createContext()

export const useTheme = () => { //Custom Hooks para poder reutilizar las funciones en varios componentes
    return useContext(ThemeContext)
}

export const useUpdateTheme = ()=> {
    return useContext(ThemeUpdateContext)
}

export default function DarkThemeProvider ({children}) {
    const [darkTheme, setDarkTheme] = useState(false)





    useEffect(()=>{
        document.body.style.backgroundColor = darkTheme ? '#202124' : '#eee'
    }, [darkTheme])

    const tooggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }



  return (
    <div>
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={tooggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    </div>
  )
}
