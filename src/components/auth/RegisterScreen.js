import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import validator from 'validator';

export const RegisterScreen = () => {

    const initialForm = {
        name: '',
        email: '',
        password: '',
        password2: ''
    }

    const [formValues, handleInputChange] = useForm(initialForm);

    const {name, email, password, password2} = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(isFormValid()){
            console.log('Form correcto')
        }
    }

    const isFormValid = () =>{
        if(validator.isEmpty(name)){
            console.log('Name is required');
            return false;
        } else if (!validator.isEmail(email)){
            console.log('Email is not valid');
            return false;
        } else if ((!validator.equals(password, password2)) || (validator.isStrongPassword(password, {minLenght:5}))){
            console.log('Password should be at least 6 characters and match each other');
            return false;
        }

        return true;
    }

    return (

        <>
            <h3 className="auth__title">Register now</h3>

            <form
                onSubmit={handleSubmit}
            >
                <div className="auth__alert-error">
                    hola
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

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

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
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
