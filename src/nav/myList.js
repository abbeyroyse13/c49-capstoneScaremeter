import React, { createContext } from "react" 
import { UserContext } from "../components/userData/userDataProvider"

export const MyList = () => {
    const { users, getUsers } = createContext(UserContext); 

    
}