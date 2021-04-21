import {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';

import {Alert} from 'react-bootstrap';

async function loginUser(credentials){
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => err);
}

function Login({setAuthToken, setUser}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [show, setShow] = useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        const authToken = await loginUser({
            email,
            password
        });
        if(authToken?.error == true){
            setError(authToken.message);
            setShow(true);
        }
        setAuthToken({'token': `${authToken.token}`});
        setUser({'user':`${authToken.user?.role}`});
    }

    return (
        <div className="login-wrapper">
            <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>{`${error}`}</Alert>
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
            </form>
        </div>
    )
}

Login.propTypes = {
    setAuthToken: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

export default Login
