
export const returnResponse = (response, status, message, data) => {
    const responseData = {};
    if(status == 200) {
        responseData.msg = message;
        responseData.data = data;
    } else {
        responseData.err = message;
    }
    return response.status(status).json(responseData);
}
const shouldShowLog = process.env.NEXT_PUBLIC_DEVELOPMENT == 'true'
export function showLog(...messages) {
    if(shouldShowLog) {
        console.log(...messages);
    }
}

export function getCookie(cookies, name) {
    if(!cookies) return null;
    const value = cookies;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function getCookies(name)  {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

export function setCookies(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

export function removeCookies(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}



 export const XORCipher = {
      encode: function(key, data) {
        data = xor_encrypt(key, data);
        return b64_encode(data);
      },
      decode: function(key, data) {
        data = b64_decode(data);
        return xor_decrypt(key, data);
      }
    };
   
    var b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   
    function b64_encode(data) {
      var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
      if (!data) { return data; }
      do {
        o1 = data[i++];
        o2 = data[i++];
        o3 = data[i++];
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;
        enc += b64_table.charAt(h1) + b64_table.charAt(h2) + b64_table.charAt(h3) + b64_table.charAt(h4);
      } while (i < data.length);
      r = data.length % 3;
      return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
    }
   
    function b64_decode(data) {
      var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
      if (!data) { return data; }
      data += "";
      do {
        h1 = b64_table.indexOf(data.charAt(i++));
        h2 = b64_table.indexOf(data.charAt(i++));
        h3 = b64_table.indexOf(data.charAt(i++));
        h4 = b64_table.indexOf(data.charAt(i++));
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;
        result.push(o1);
        if (h3 !== 64) {
          result.push(o2);
          if (h4 !== 64) {
            result.push(o3);
          }
        }
      } while (i < data.length);
      return result;
    }
   
    function keyCharAt(key, i) {
      return key.charCodeAt( Math.floor(i % key.length) );
    }
   
    function xor_encrypt(key, data) {
        
      return data.split('').map(function(c, i) {
        return c.charCodeAt(0) ^ keyCharAt(key, i);
      });
    }
   
    function xor_decrypt(key, data) {
      return data.map(function(c, i) {
        return String.fromCharCode( c ^ keyCharAt(key, i) );
      }).join("");
}

export const valid = (name, email, password, cf_password) => {
    if( !name || !email || !password) {
        return 'Please add all fields.'
    }

    if(!validateEmail(email)) {
        return 'Invalid emails';
    }

    if(password.length < 6) {
        return 'Password must be at least 6 character';
    }

    if( password != cf_password) {
        return 'Confirm did not match';
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

   
  
