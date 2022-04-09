import { useAuth } from "../../hooks/context/auth-context";
import { Navigate,useLocation } from "react-router-dom";
export const PrivateRoute=({children})=>{
    const location=useLocation()
    const { authState :{token}} = useAuth();
	return authState ? children : <Navigate to="/login" state={{from:location}} replace/>;
}