import { useState, createContext, useEffect} from "react";

export const UserContext = createContext()


const UsedContext = (props) => {


    const [details, setDetails] = useState({
        name:'',
        authlev:'',
        business_name:'',
        email:'',
        location:''
    })

    console.log(details)
    return(
        <UserContext.Provider value={{details, setDetails}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UsedContext;