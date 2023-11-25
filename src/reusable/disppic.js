import axios from "axios";
import { useState, useEffect, useRef, useContext, useMemo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faClose, faCheckCircle, faNairaSign, faDollarSign, faUser, faBars, faShoppingCart, faShoppingBag, faShoppingBasket, faCaretDown, faCircleQuestion, faPlus } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../auth/usercontext";


const Disppic  = ({getreadstate, id}) => {
    const {details, setDetails} = useContext(UserContext)
    const [files, setfiles] = useState('')
    const [preview, setpreview] = useState([])
    const imgref = useRef('')
    const img_counter = useRef('')
    const img_message = useRef('')
    const push = (instr) => {
        getreadstate(instr)
    }
    const fileDrop2 = (e) =>{
        e.preventDefault()
       // console.log(files.length)
        const fileSize = e.target.files[0].size / 1024 / 1024;
        if (fileSize > 5) {
            img_message.current.innerText = "The image size must be a minimum of 600kb and a maximum of 5MB"
        }
        else{
            setfiles(e.target.files[0])
            console.log(e.target.files[0])
            setpreview([{imag: URL.createObjectURL(e.target.files[0])}])
            img_message.current.innerText = ""
        }
            
    }
    const splice =(i)=>{
        setfiles(current => {
            const copy = [...current];
            delete current[i];
            return copy
        })
        setfiles(current => {
            const [i, ...rest] = current;
            return rest;
          });
          img_counter.current.innerText = 21 - files.length+' image(s) left'
          img_message.current.innerText = ""
        
    }
    const splicep =(i)=>{
        preview.splice(i, 1)
        setpreview(preview)
        
    }
    const apply = async(e) => {
            e.preventDefault()
           console.log('clicked')
            var loid = id
            var formData = new FormData();
            formData.append("profile_image", files)
            var data = {
                profile_image:files
            };
            try {
                const response = await axios.post('http://vensle.com/api/api/edit/'+loid, data, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  });
                console.log(response.data.msg);
                const {id,full_name, business_name, email, address, phone, profile_img, } = response.data.user
                    setDetails({...details,
                        id:id,
                        name:full_name,
                        business_name: business_name,
                        email: email,
                        phone: phone,
                        address: address,
                        profile_image: profile_img,
                    })
                    const itemize = {...details,
                        id:id,
                        name:full_name,
                        business_name: business_name,
                        email: email,
                        phone: phone,
                        address: address,
                        profile_image: profile_img,
                    }
                    localStorage.setItem('logs', JSON.stringify(itemize))
               img_message.current.innerText='Image successfully uploaded'
               setTimeout(() => {
                push(true)
               }, 2000);
            } catch (err) {
               console.log(err)
                // console.log('An error occured');
            }
        // push(true)
    }
    return(
        <div className="location-pop">
            <div className="lp-inner imgdisplay">
                <div className="header">
                    <span>Add image</span>
                    <FontAwesomeIcon icon={faClose} onClick={(e)=>push(false)}/>
                </div>
                {
                    files.length === 0 ?
                    <div className="iconium" onClick={(e)=>imgref.current.click()}>
                        <FontAwesomeIcon icon={faPlus}/>
                        <form encType="multipart/formdata">
                            <input type="file" ref={imgref} onChange={fileDrop2} />
                        </form>
                    </div>
                    :
                    preview.map(({imag}, i)=>(
                        <div className="img_box">
                            {/* <div className="close"><FontAwesomeIcon icon={faClose} onClick={(e)=>{splice(i); splicep(i)}}/></div> */}
                            <div className="imgs">
                                <img src={imag} alt="" />
                            </div>
                        </div>
                    ))
                }
                <div className="me">
                    <div ref={img_message} style={{color:'#03ad66', margin:'0 20px', fontSize:'.75em', textAlign:'center'}}></div>
                    <div className="option">
                        <button onClick={(e)=>{setfiles('')}}>Delete image</button>
                        <button onClick={apply}>Apply image</button>
                        <button onClick={(e)=>push(false)}>Cancel</button>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}
export default  Disppic;
        