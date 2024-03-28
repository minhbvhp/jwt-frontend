import './Register.scss';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    const handleRegister = () => {
        let userData = { email, phone, username, password };
        console.log(">>> check user data: ", userData);
    }

    useEffect(() => {
        // axios.get("http://localhost:8080/api/test-api")
        //     .then(data => { console.log(">>> check data axios: ", data) })
    }, []);

    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 col-sm-7 d-none d-sm-block">
                        <div className='brand'>
                            FaceMinh
                        </div>

                        <div className='detail'>
                            FaceMinh helps you connect and share with the people in your life.
                        </div>
                    </div>

                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3 mx-sm-0 mx-3">
                        <div className='brand d-sm-none'>
                            FaceMinh
                        </div>

                        <div className='form-group'>
                            <label>Email:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Phone number'
                                value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>User name:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='User name'
                                value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Password:</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Re-enter password:</label>
                            <input type='password'
                                className='form-control'
                                placeholder='Re-enter password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                        </div>

                        <button className='btn btn-primary'
                            onClick={() => handleRegister()}>Register</button>

                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}>
                                Already have an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register