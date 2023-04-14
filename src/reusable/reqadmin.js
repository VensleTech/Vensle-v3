import { useState, useEffect, useRef, useContext} from "react";
import { UserContext } from "../auth/usercontext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Readmin = ({children}) => {
  const {details:{authlev}} = useContext(UserContext)
  const location=useLocation()
  if(authlev !== 1){
    return <Navigate to='/admin/profile' />
  }
  return (
    <div>
        {children}
    </div>
  )
}
export  default Readmin;