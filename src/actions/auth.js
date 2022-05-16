import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) => {

        dispatch(startLoading());

        setTimeout(()=>{
            
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(({user})=>{
                    dispatch(
                        login(user.uid, user.displayName)
                    );
                }).catch( error =>{
                    Swal.fire('Error', error.message, 'error')
                }).finally(()=>{
                    dispatch(finishLoading());
                })
        }, 2000)
        
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async({user})=>{
                await updateProfile(user, {displayName: name});

                dispatch(
                    login(user.uid, user.displayName)
                );
            }).catch( error =>{
                Swal.fire('Error', error.message, 'error')
            })
    }
}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () =>{
    return async ( dispatch ) => {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());

        dispatch(noteLogout());
    }
}

export const logout = () => ({
    type: types.logout
});