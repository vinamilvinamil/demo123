import React, {useEffect, useState} from 'react';

import { removeCookies, setCookies } from '../utils/commonFunctions'
function AuthHOC(WrapperFunction) {
    return function (props) {

        const [valid, setValid] = useState(false);

      const handleLogout = async () => {
        removeCookies('refreshtoken');
        removeCookies('_atc');
        removeCookies('accessToken')
        setCookies('refreshtoken', '')
        setCookies('accessToken', '');
        setCookies('_atc', '');
        localStorage.removeItem('firstLogin');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        window.location.href = '/signin';
    }
      
      useEffect(() => {
        if(props.data == null){
            handleLogout();
        } else {
            setValid(true);
        }
      }, [])
      if(!valid) return <div></div>
      return (
        <WrapperFunction  {...props} />
      );
    }
}

export default AuthHOC;