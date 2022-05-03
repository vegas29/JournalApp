import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({isAuth, children}) => {

    return isAuth
        ? children
        : <Navigate to="/auth/login"/>
}
