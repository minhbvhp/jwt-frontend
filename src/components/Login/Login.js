import './Login.scss'

const Login = (props) => {
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

                        <input type='text' className='form-control' placeholder='Email address' />
                        <input type='password' className='form-control' placeholder='Password' />

                        <button className='btn btn-primary'>Login</button>

                        <span className='text-center'>
                            <a className='forgot-password' href='#'>Forgotten password ?</a>
                        </span>

                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success'>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login