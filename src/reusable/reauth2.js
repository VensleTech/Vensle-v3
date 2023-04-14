import { useState, useEffect, useRef, useContext} from "react";
import { UserContext } from "../auth/usercontext";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Cookies = ({children}) => {
  const {details:{cookies}} = useContext(UserContext)
  const location=useLocation()
  if(!cookies){
    return (
      <div className="logintsam">
        <div>Login to send a message</div>
        <div className="loginsignup">
            <Link to={'/signin'}><div>Sign in</div></Link>
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
export  default Cookies;