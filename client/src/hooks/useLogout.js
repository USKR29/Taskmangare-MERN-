import { useContext } from "react";
import { AuthContext } from "../Context/AuthContent";


const useLogout = ()=>{

    const {dispatch} = useContext(AuthContext);

    const logout = ()=>{
        localStorage.removeItem('token');
        dispatch({type: 'LOGOUT'});
    }
    return {logout}
}

export default useLogout;