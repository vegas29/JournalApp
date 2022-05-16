import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import validator from 'validator';

import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui);

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
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () =>{
        if(validator.isEmpty(name)){
            dispatch(setError('Name is required'));
            setTimeout(()=>{
                dispatch(removeError());
            }, 2000);
            return false;
        } else if (!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            setTimeout(()=>{
                dispatch(removeError());
            }, 2000);
            return false;
        } else if ((!validator.equals(password, password2)) || (validator.isStrongPassword(password, {minLenght:5}))){
            dispatch(setError('Password should be at least 6 characters and match each other'));
            setTimeout(()=>{
                dispatch(removeError());
            }, 2000);
            return false;
        }

        dispatch(removeError());

        return true;
    }

    return (

        <>
            <h3 className="auth__title">Register now</h3>

            <form
                onSubmit={handleSubmit}
                className="animate__animated animate__fadeIn animate__faster"
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
