import {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials){
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({setAuthToken, setUser}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const authToken = await loginUser({
            email,
            password
        });
        setAuthToken({'token': `${authToken.token}`});
        setUser({'user':`${authToken.user?.role}`});
    }

    return (
        <div className="login-wrapper">
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
