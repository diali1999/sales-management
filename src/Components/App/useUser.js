import {useState} from 'react';

function useUser() {

    function getUser(){
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user?.username
    }
    const [user, setUser] = useState(getUser());
    function saveUser(user){
        sessionStorage.setItem('user',JSON.stringify(user));
        setUser(user.username);
    }
    return {
        setUser: saveUser,
        user
    }
}

export default useUser
