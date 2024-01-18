const { createContext, useState, useContext, useEffect } = require("react");
//1st step 
//creating the context
const Themecontext=createContext();

//2nd step
//providing the value
export default ThemeContextProvider=({children})=>{
    const [mode,setMode]=useState('light');
    return(
        <Themecontext.Provider value={{mode,setMode}}>
            {children}
        </Themecontext.Provider>
    )
}

//3rd step
//optional
//creating a custom hook
export const useTheme=()=>{
    return useContext(Themecontext);
}