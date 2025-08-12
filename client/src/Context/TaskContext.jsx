import { createContext, useReducer, useState } from "react";

export const TaskContext = createContext();


export const TaskContextProvider = ({ children})=>{


    const [tasks, setTasks] = useState([]);

    console.log('task context data', tasks)


    return(
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}