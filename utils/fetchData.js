import { getCookies1 } from "./commonFunctions";
import Router from 'next/router'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const parseToken = (req) => {
    let token = '';
    var match = req.headers.cookie.match(new RegExp('(^| )' + 'accessToken' + '=([^;]+)'));
    if (match) token = match[2];
    return token;
}
export const getData = async (url, params, token, isFE = true) => {
    let queryParams = '';
    if(params) {
        queryParams = '?' + (new URLSearchParams(params).toString());
    }
    if(isFE) {
        token = getCookies1('accessToken');
    }
    const res = await fetch(`${baseUrl}/api/${url}${queryParams}`, {
        method: 'GET',
        headers: {
            'Authorization': token || ''
        }
    });
    const status = await res.status;
    if(isFE) {
        if(status == 401)
            Router.reload();
    }
    const data = await res.json();
    return data;
}

export const postData = async (url, post, isFE = true) => {
    let token = ''
    if(isFE) {
        token = getCookies1('accessToken');
    }
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    });
    const data = await res.json();
    return data;
}

export const putData = async (url, post) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(post)
    });
    const data = await res.json();
    return data;
}

export const patchData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    });
    const data = await res.json();
    return data;
}

export const deleteData = async (url, id, isFE = true) => {
    let token = ''
    if(isFE) {
        token = getCookies1('accessToken');
    }
    const res = await fetch(`${baseUrl}/api/${url}?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    const data = await res.json();
    return data;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const handleFetchData = async (dispatch, method, args,  shouldSuccess = true, shouldLoading = true, shouldBlur = false) => {
    dispatch && dispatch({type: 'NOTIFY', payload: {loading: shouldLoading && true, blur: shouldBlur && true}})

    const res = await method.apply(this, args);
    if(res.err) {
        dispatch && dispatch({type: 'NOTIFY', payload: {error: res.err, loading: false, blur: false}})
        await timeout(1500);
        return null;
    }

    if(shouldSuccess) {    
        dispatch && dispatch({type: 'NOTIFY', payload: {success: res.msg, loading: false, blur: false}})
        await timeout(1500);   
    } else 
        dispatch && dispatch({type: 'NOTIFY', payload: {loading: false, blur: false}})
    return res.data || res.msg;
}

