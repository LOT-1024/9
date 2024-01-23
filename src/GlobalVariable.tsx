import React, { createContext, useContext, useState, ReactNode } from "react";

type MyContextProps = {
    trigger: boolean,
    updateData: (newData: boolean) => void
}

interface MyContextProviderProps {
    children: ReactNode
}

const MyContext = createContext<MyContextProps | undefined>(undefined)

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [trigger, setTrigger] = useState<boolean>(true)
    
    const updateData = (newData: boolean) => {
        setTrigger(newData)
    }

    return (
        <MyContext.Provider value={{trigger, updateData}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
  };