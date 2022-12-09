import React from "react";

const themes = {
    darkMode: {
      color: 'white',
      backgroundColor: 'black'
    },
    
    lightMode : {
      color: 'black',
      backgroundColor: 'white'
    }
  }
  
  const stateAwal = {
    theme: themes.lightMode,
    darkMode: false,
    toggle: () => {}
  }

  const ThemeContext = React.createContext(stateAwal);
  
  function ThemeProvider({ children }) {
    const [ darkMode, setDarkMode ] = React.useState(false); 
  
    React.useEffect(() => {
      const isdarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isdarkMode);
    }, [darkMode]);
  
    const toggle = () => {
      const isdarkMode = !darkMode
      localStorage.setItem('darkMode', JSON.stringify(isdarkMode));
      setDarkMode(isdarkMode);
    }

    const theme = darkMode ? themes.darkMode : themes.lightMode;
  
    return (
      <ThemeContext.Provider value={{ theme, darkMode, toggle }}>
        {children}
      </ThemeContext.Provider>
    )
  }
  
  export { ThemeProvider, ThemeContext };