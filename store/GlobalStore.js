import {createContext, useEffect, useReducer, useState} from 'react'
import { getData } from '../utils/fetchData';
import reducers from './Reducers'
import Cookie from 'js-cookie';
import {XORCipher, setCookies, removeCookies} from '../utils/commonFunctions'
export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const initialState = {notify: {}, auth: {}, cart: [], menuClosed: true}
    const [state, dispatch] = useReducer(reducers, initialState )
    
    return (
        <DataContext.Provider value = {[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )
}