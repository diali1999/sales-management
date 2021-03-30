import {useState} from 'react';

function useUser() {

    function getUser(){
        const userString = sessionStorage.getItem('user');
        const userToken = JSON.parse(userString);
        return userToken?.user
    }

    const [user, setUser] = useState(getUser());

    function saveUser(role){
        sessionStorage.setItem('user',JSON.stringify(role));
        setUser(role);
    }
    return {
        setUser: saveUser,
        user
    }
}

export default useUser
