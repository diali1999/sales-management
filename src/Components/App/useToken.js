import {useState} from 'react';

function useToken() {

    function getAuthToken(){
        const tokenString = sessionStorage.getItem('auth-token');
        const token = JSON.parse(tokenString);
        return token?.token
    }
    const [authToken, setAuthToken] = useState(getAuthToken());

    function saveAuthToken(authToken){
        sessionStorage.setItem('auth-token', JSON.stringify(authToken));
        setAuthToken(authToken.token);
    }
    return {
        setAuthToken: saveAuthToken,
        authToken
    }
}

export default useToken
