import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import validator from 'validator';

import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { msgError, loading } = useSelector( state => state.ui);

    console.log(msgError, loading)

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(email, password)

        if(isFormIsValid()){
            dispatch( startLoginEmailPassword(email, password))
        }
    }

    const isFormIsValid = () =>{
        if(!validator.isEmail(email)){
            dispatch( setError('Email is not valid'));
            setTimeout(()=>{
                dispatch(removeError());
            }, 2000);
            return false;
        }else if (validator.isEmpty(email)){
            dispatch( setError('Email is empty'));
            setTimeout(()=>{
                dispatch(removeError());
            }, 2000);
            return false;
        }else if (validator.isEmpty(password)){
            dispatch( setError('Password is empty'));
            setTimeout(()=>{
                dispatch(removeError());
            }, 2000);
            return false;
        }

        dispatch(removeError());

        return true;
    }
    
    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
    return (
        <>
            <h3 className="auth__title">Sign into your account</h3>

            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={handleLogin}
            >

                {
                    msgError && 
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                >
                    {loading ? 'Cargando': 'Iniciar sesion'}
                </button>

                <hr
                    className="auth__line"
                />


                <div className="auth__social-networks">
                    <p>Login with social networks</p>


                    <div 
                        className="auth__btns"
                    >
                        <div className="auth__btn" onClick={handleGoogleLogin}>
                            <img 
                                className="google-icon" 
                                src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" 
                                alt="google button" 
                            />
                        </div>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>

            {/* Modal */}

            <Modal
                isOpen={loading}
                className='modal-dialog-centered modal-lg'
            >
                <ModalBody className='pb-5 px-sm-4 mx-50 d-flex justify-content-center p-5'>
                    <Spinner size='md'></Spinner>
                    <p className="fs-1 d-block">Cargando...</p>
                </ModalBody>
            </Modal>
        </>
    )
}
