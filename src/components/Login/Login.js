import React, { useEffect, useState, useContext } from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';
import { UserContext } from '../../context/UserContext';

const Login = (props) => {
    const { loginContext } = useContext(UserContext);

    let history = useHistory();

    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    }

    const [objValidInput, setObjValidInput] = useState(defaultValidInput);

    const handleCreateNewAccount = () => {
        history.push("/register");
    }

    const handleLogin = async () => {
        setObjValidInput(defaultValidInput);

        if (!valueLogin) {
            setObjValidInput({
                ...defaultValidInput,
                isValidValueLogin: false
            })
            toast.error("Please enter your email address or phone number");
            return;
        }

        if (!password) {
            setObjValidInput({
                ...defaultValidInput,
                isValidPassword: false
            })
            toast.error("Please enter your password");
            return;
        }

        let response = await loginUser(valueLogin, password);

        if (response && +response.EC === 0) {
            let groupWithRoles = response.DT.groupWithRoles;
            let email = response.DT.email;
            let username = response.DT.username;
            let token = response.DT.access_token;

            let data = {
                isAuthenticated: true,
                token,
                account: {
                    groupWithRoles,
                    email,
                    username,
                }
            }

            loginContext(data);

            history.push("/users");
        }

        if (response && +response.EC !== 0) {
            toast.error(response.EM);
        }
    }

    const handleEnterDown = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
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

                        <input type='text'
                            className={objValidInput.isValidValueLogin ? 'form-control' : 'form-control is-invalid'}
                            placeholder='Email address or phone number'
                            value={valueLogin} onChange={(event) => { setValueLogin(event.target.value) }} />

                        <input type='password'
                            className={objValidInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                            placeholder='Password'
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                            onKeyPress={(event) => handleEnterDown(event)} />

                        <button className='btn btn-primary' onClick={() => handleLogin()}>Login</button>

                        <span className='text-center'>
                            <a className='forgot-password' href='#'>Forgotten password ?</a>
                        </span>

                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleCreateNewAccount()}>
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login