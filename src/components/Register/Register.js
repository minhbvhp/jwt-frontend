import './Register.scss';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    }

    const [objCheckInput, setObjCheckInput] = useState({
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    });

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    const isValidInputs = () => {
        setObjCheckInput(defaultValidInput);

        if (!email) {
            toast.error("Email is required");
            setObjCheckInput({
                ...defaultValidInput,
                isValidEmail: false
            })
            return false;
        }

        let regx = /\S+@\S+\.\S+/;
        if (!regx.test(email)) {
            setObjCheckInput({
                ...defaultValidInput,
                isValidEmail: false
            })
            toast.error("Please enter a valid email address");
            return false;
        }

        if (!phone) {
            toast.error("Phone is required");
            setObjCheckInput({
                ...defaultValidInput,
                isValidPhone: false
            })
            return false;
        }

        if (!password) {
            toast.error("Password is required");
            setObjCheckInput({
                ...defaultValidInput,
                isValidPassword: false
            })
            return false;
        }

        if (password != confirmPassword) {
            toast.error("Your password is not the same");
            setObjCheckInput({
                ...defaultValidInput,
                isValidConfirmPassword: false
            })
            return false;
        }

        return true;
    }

    const handleRegister = () => {
        let check = isValidInputs();

        if (check === true) {
            axios.post("http://localhost:8080/api/v1/register", {
                email, phone, username, password
            })
        }

    }

    useEffect(() => {

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
                                className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'}
                                placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input type='text'
                                className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'}
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
                                className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                                placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label>Re-enter password:</label>
                            <input type='password'
                                className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'}
                                placeholder='Re-enter password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                        </div>

                        <button className='btn btn-primary' type='button'
                            onClick={() => handleRegister()}>Register</button>

                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' type='button' onClick={() => handleLogin()}>
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