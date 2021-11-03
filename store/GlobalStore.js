import {createContext, useEffect, useReducer, useState} from 'react'
import { getData } from '../utils/fetchData';
import reducers from './Reducers'
import Cookie from 'js-cookie';
import {XORCipher, setCookies, removeCookies} from '../utils/commonFunctions'
export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const initialState = {notify: {}, auth: {}, cart: []}
    const [state, dispatch] = useReducer(reducers, initialState )
    const {cart} = state;
    
    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');
        if(firstLogin) {
            getData('auth/accessToken').then(res => {
                if(res.err) {
                    localStorage.removeItem('accessToken')
                    return localStorage.removeItem('firstLogin');
                }
                removeCookies('_atc');
                //const encode = XORCipher.encode(process.env.NEXT_PUBLIC_ECRYPTED_KEY, res.data.access_token) 
                setCookies('_atc', res.data.access_token);
                localStorage.setItem('accessToken', res.data.access_token)
                dispatch({
                    type: 'AUTH',
                    payload: {
                        token: res.data.access_token,
                        user: res.data.user
                    }
                })
            })
        } else {
            getData('auth/accessGuest').then(res => {
                if(res.err) {
                    localStorage.removeItem('accessToken')
                    return localStorage.removeItem('firstLogin');
                }
                localStorage.setItem('accessToken', res.data.access_token)
                removeCookies('_atc');
                //const encode = XORCipher.encode(process.env.NEXT_PUBLIC_ECRYPTED_KEY, res.data.access_token) 
                setCookies('_atc', res.data.access_token);
                setCookies('refreshtoken', res.data.refresh_token, 7)
            })
        }
    }, []);

    useEffect(() => {
        const __next_cart01_devat = JSON.parse(localStorage.getItem('__next_cart01_devat'))
        if(__next_cart01_devat)
            dispatch({
                type: 'ADD_CART',
                payload: __next_cart01_devat
            })
    }, [])

    useEffect(() => {
        localStorage.setItem('__next_cart01_devat', JSON.stringify(cart));
    }, [cart])
    return (
        <DataContext.Provider value = {[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )
}