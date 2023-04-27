import { useState, useEffect, useRef, useContext} from "react";
import { UserContext } from "../auth/usercontext";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Relogged = ({children}) => {
  const {details:{specialref}} = useContext(UserContext)
  const location=useLocation()
  if(!specialref){
    return (
      <div className="logintsam">
        <div className="loginsignup">
            <Link to={'/signin'}><div>Sign up</div></Link>
          </div>
      </div>
    )
  }
  return (
    <div>
        {children}
    </div>
  )
}
export  default Relogged;