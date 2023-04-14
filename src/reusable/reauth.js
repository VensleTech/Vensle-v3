import { useState, useEffect, useRef, useContext} from "react";
import { UserContext } from "../auth/usercontext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Reauth = ({children}) => {
  const {details:{specialref}} = useContext(UserContext)
  const location=useLocation()
  if(!specialref){
      return <Navigate to='/signin' state={{path: location.pathname}} />
  }
  return (
    <div>
        {children}
    </div>
  )
}
export  default Reauth;