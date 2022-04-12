import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'diegoleandro-29@hotmail.com',
        password: '123456'
    })

    const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(email, password)
        dispatch( startLoginEmailPassword(email, password))
    }
    
    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
    return (
        <>
            <h3 className="auth__title">Sign into your account</h3>

            <form
                onSubmit={handleLogin}
            >
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
                >
                    Iniciar sesion
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
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
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
        </>
    )
}
