import { useState } from "react"
import { faUser, faLocationDot, faFilter, faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Drop from "../reusable/drop"
import Ops from "../reusable/ops"
import Search from "../reusable/search"
import Pcards from "../reusable/pcards"
import Sidebar from "./sidebar"
import Menu from "./menu"
import ReusableTable from "./reusabletable"
import Input from "./input"
import Select from "../select"

const Upload = () => {
    const [files, setfiles] = useState([])
    const [preview, setpreview] = useState([])
    const fileDrop = (e) =>{
        e.preventDefault()
        

       for(let index = 0; index < e.dataTransfer.files.length; index++) {
            setfiles([...files, {name : e.dataTransfer.files[index].name}])
            setpreview([...preview, {imag: URL.createObjectURL(e.dataTransfer.files[index])}])
        }
       
    }
    const dragEnter = (e) => {
        e.preventDefault()
    }
    const dragOver = (e) => {
        e.preventDefault()
    }
    const dragLeave = (e) => {
        e.preventDefault()
    }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home -> Upload</div>
                        <div><span>Abudonnigeria</span><FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Upload New Item</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                    </div>
                    <div className="table-container">
                        <h4>Item information</h4>
                        
                        <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'60% 37%', gap:'3%'}}>
                            <div className="adm-main-left" style={{display:'grid', gap:'30px'}}>
                                <div>
                                    <h5>Taxonomy</h5>
                                    <Input title={'Item Name'} icon={''} type={"text"}/>
                                    <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'repeat(2, 49%)', gap:'1%'}}>
                                        <Input title={'Price Type'} icon={''} type={"select"}/>
                                        <Input title={'Item price'} icon={''} type={"currcombo"}/>
                                        <Input title={'Quantity'} icon={''} type={"select"}/>
                                    </div>
                                </div>
                                <div>
                                    <h5>Classification</h5>
                                    <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'repeat(2, 49%)', gap:'1%'}}>
                                        <Input title={'Item Condition'} icon={''} type={"radio"}/>
                                        <Input title={'Transaction Type'} icon={''} type={"select"}/>
                                        <Input title={'Group'} icon={''} type={"select"}/>
                                        <Input title={'Category'} icon={''} type={"select"}/>
                                    </div>
                                </div>
                                <div>
                                    <h5>Overview</h5>
                                    <Input title={'Features'} icon={''} type={"text"}/>
                                    <Input title={'Item Name'} icon={''} type={"textarea"}/>
                                </div>
                            </div>
                            
                            <div className="adm-main-left">
                                <div className="click-to-upload" 
                                onDrop={fileDrop}
                                onDragOver={dragOver}
                                onDragEnter={dragEnter}
                                onDragLeave={dragLeave}
                                >
                                    <div><FontAwesomeIcon icon={faImage} /></div>
                                    <div>Drag and drop image</div>
                                </div>
                                <div className="imgs-container">
                                {
                                    preview.map(({imag})=>(
                                        <div>
                                            <div className="imgs">
                                                <img src={imag} alt="" />
                                            </div>
                                            <div className="featured-input" title="Make this image the first to show">
                                                <input type='radio' name='featured'/><span> Feature this image</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        
                        </div>
                        <button>Create</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Upload