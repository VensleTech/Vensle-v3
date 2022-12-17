import { useState } from "react"
import { faPen, faCamera, faDashboard,faClose, faHome, faEye, faBox, faEdit, faBoxesPacking, faGear, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProdPop from "../reusable/prodpop"
import Newpup from "../reusable/newpop"

const Customertable = ({id, fullname, email, phone}) => {
    const [isOpen, setIsOpen] = useState(false)
    const getreadstate = (readstate)=> {
        setIsOpen(readstate)
      }
    return(
        <div className="reusable-table-three">
            <div>{id}</div>
            <div>{fullname}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div className="viewer" onClick={(e)=>setIsOpen(!isOpen)} ><FontAwesomeIcon icon={faEye}/> View</div>
            {isOpen === true ?
                <Newpup id={id} title={fullname} price={email} img={id} getreadstate={getreadstate}>
                <div className="profile-container">
                <div className="pf-left">
                    <div className="pfr-img">
                        <img src="../../../ffff.jpg" alt="" />
                    </div>
                </div>
                <div className="pf-right">
                    <h3>{fullname}</h3>
                    <h5>Personal Information</h5>
                        <table>
                          <tr>
                              <td>Email</td>
                              <td>{email}</td>
                          </tr>
                          <tr>
                              <td>Phone</td>
                              <td>{phone}</td>
                          </tr>
                          <tr>
                              <td>Address</td>
                              <td>Ikotun, Lagos Nigeria</td>
                          </tr>
                        </table>
                    <h5>Business Information</h5>
                        <table>
                            <tr>
                                <td>Email</td>
                                <td>abudonnigeria@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>922-55444885</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>Ikotun, Lagos Nigeria</td>
                            </tr>
                        </table>
                </div>
            </div>
                </Newpup>: null
            }
        </div>
    )
}

export default Customertable