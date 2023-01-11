import React, { createContext } from 'react'

export const MapContext = createContext<{ 
    isShown: boolean; 
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>; 
}>({isShown: true, setIsShown: () => true})