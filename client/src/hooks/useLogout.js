import { useContext } from "react";
import { AuthContext } from "../Context/AuthContent";
import { TaskContext } from "../Context/TaskContext";

const useLogout = ()=>{

    const {dispatch} = useContext(AuthContext);
    const {setTasks} = useContext(TaskContext)

    const logout = ()=>{
        localStorage.removeItem('token');
        dispatch({type: 'LOGOUT'});
        setTasks([]);

    }
    return {logout}
}

export default useLogout;