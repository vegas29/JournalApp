import { Link } from "react-router-dom";

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Sign into your account</h3>

            <form>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
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
                        <div className="auth__btn">
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
