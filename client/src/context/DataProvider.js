import React, { createContext, useContext, useEffect, useState } from "react";



export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
    
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
   
        
    return (
        <DataContext.Provider value={{ 
            user,
            setUser, 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;