const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getData = async (url, token = 'xxx') => {
    
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'GET',
        headers: {
            
            'Authorization': token
        }
    });
    const data = await res.json();
    return data;
}

export const postData = async (url, post, token) => {
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

export const putData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
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

export const DELETEData = async (url, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    const data = await res.json();
    return data;
}

export const handleFetchData = async (dispatch, method, args,  shouldSuccess = true, shouldLoading = true, shouldBlur = false) => {
    dispatch && dispatch({type: 'NOTIFY', payload: {loading: shouldLoading && true, blur: shouldBlur && true}})

    const res = await method.apply(this, args);

    if(res.err) {
        dispatch && dispatch({type: 'NOTIFY', payload: {error: res.err, loading: false, blur: false}})
        return null;
    }
    if(shouldSuccess) 
        dispatch && dispatch({type: 'NOTIFY', payload: {success: res.msg, loading: false, blur: false}})
    return res.data || res.msg;
}

