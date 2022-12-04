import React, { createContext, useContext, useEffect, useState } from "react";

import  secureLocalStorage  from  "react-secure-storage";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userInfo = JSON.parse(secureLocalStorage.getItem("userInfo"));
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