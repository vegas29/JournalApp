import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { login } from "../actions/auth"
import { JournalScreen } from "../components/journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"

//Routes
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) =>{
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false)
            }

            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary d-block mx-auto my-5" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                
                    <Route path="/auth/*"
                        
                     element={

                        <PublicRoute isAuth={isLoggedIn}>
                            <AuthRouter/>
                        </PublicRoute>

                        }
                    />
                

                
                    <Route path="/"
                     element={

                        <PrivateRoute isAuth={isLoggedIn}>
                            <JournalScreen/>
                        </PrivateRoute>
                        
                        }
                    />


                <Route path="*" element={<Navigate replace to="/auth/"/>} />
            </Routes>
        </BrowserRouter>
    )
}
