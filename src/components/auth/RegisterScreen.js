import { Link } from "react-router-dom"

export const RegisterScreen = () => {
    return (

        <>
            <h3 className="auth__title">Register now</h3>

            <form>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

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

<input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                />

                <button
                    type="submit"
                    className="btn btn-primary mb-5"
                >
                    Registrate
                </button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    ¿Already registered?
                </Link>
            </form>
        </>
    )
}
