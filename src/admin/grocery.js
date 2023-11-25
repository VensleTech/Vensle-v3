import { useState, useRef, useEffect,useContext } from "react"
import { faUser, faLocationDot, faCaretRight,faPlus, faImage, faClose, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Sidebar from "./sidebar"
import Menu from "./menu"
import Input from "./input"
import axios from "axios"
import { UserContext } from "../auth/usercontext"
import { useNavigate } from "react-router-dom"
import LocatFinder from "../reusable/locafinder"
import Success from "../reusable/success"
import { decode } from "html-entities"

const Grocery = () => {
    const curr = localStorage.getItem('curr')
    const nav = useNavigate()
    const {details:{authlev, name,  id, userlocation, currency}, details, setDetails} = useContext(UserContext)
    const [visible, setvisible] = useState(1)
    const [opendrop, setopendrop] = useState(false)
    const [successful, setsuccessful] = useState(false)
    const [bcstore, setbcstore] = useState({})
    const [trans, settrans] = useState([])
    const [catone, setcatone] = useState([])
    const [popmap, setpopmap] = useState(false)
    const [cattwo, setcattwo] = useState([])
    const [catthree, setcatthree] = useState([])
    const [catfour, setcatfour] = useState([])
    const [clicked, setclicked] = useState(false)
    const [msg, setmsg] = useState('')
    const [val, setval] = useState('')
    const [error, seterror] = useState({})
    const [radius, setradius] = useState(120)
    
    const itemname = useRef('')
    const itemprice = useRef('')
    const description = useRef('') 
    const desc_message = useRef('')
    const name_message = useRef('')
    const price_message = useRef('')
    const clone = useRef('')
    const category_message = useRef('')
    const cond_message = useRef('')
    const itemcondition = useRef('')
    const img_message = useRef('')
    const dropref = useRef('')
    const nameinput = useRef('')
    const priceinput = useRef('')
    const descinput = useRef('')
    const cloner = useRef('')
    const radio1 = useRef('')
    const radio2 = useRef('')
    const radio3 = useRef('')
    useEffect(()=>{
        getparners()
        categoryone(0, setcatone)
    },[])
    useEffect(()=>{
        document.body.addEventListener('click', (e)=>{
            
            if(!cloner.current.contains(e.target)){
                setopendrop(false)
            }
        })
    })
    const getparners = async () => {
        try {
            const trans = await axios.get("http://vensle.com/api/api/trans")
            settrans(trans.data)
        } catch (error) {
            
        }
    }
    const categoryone = async (id, step) => {
        try {
            const categs = await axios.get("http://vensle.com/api/api/fresh/gcategory/"+id)
            step(categs.data)
            
            category_message.current.innerText=''
            clone.current.style.border='none'
        } catch (error) {
            
        }
    }
    
    const imgref = useRef('')
    const [feats, setfeats] = useState([
    ])
    const [payload, setpayload] = useState({
        title:'',
        price:'',
        item_condition:'',
        category:'',
        description:'',
        featured_image:'0',
        delivery:1,
        location: userlocation.region+'+|+'+userlocation.city+'+|+'+userlocation.country,
    })
    
    const [files, setfiles] = useState([])
    const [preview, setpreview] = useState([])
    
    useEffect(()=>{
        if(payload.item_group !== ''){
            categoryone(payload.item_group, setcattwo)
        }
    },[payload.item_group])
    useEffect(()=>{
        if(payload.subone !== ''){
            categoryone(payload.subone, setcatthree)
        }
    },[payload.subone])

    // purefunctions
    const fileDrop = (e) =>{
        e.preventDefault()
       for(let index = 0; index < e.dataTransfer.files.length; index++) {
            const fileSize = e.dataTransfer.files[index].size / 1024 / 1024;
           // console.log(fileSize)
            if (fileSize > 5) {
                img_message.current.innerText = "The image size must be a minimum of 600kb and a maximum of 5MB"
            }
            else{
                if(files.length > 19){
                    img_message.current.innerText = "You cannot go beyond 20 images"
                }
                else{
                    setfiles([...files,[ e.dataTransfer.files[0]]])
                    setpreview([...preview, {imag: URL.createObjectURL(e.dataTransfer.files[0])}])
                    img_message.current.innerText = ""
                }
            }
        }
    }
    const fileDrop2 = (e) =>{
        e.preventDefault()
        const fileSize = e.target.files[0].size / 1024 / 1024;
        if (fileSize > 5) {
            img_message.current.innerText = "The image size must be a minimum of 600kb and a maximum of 5MB"
        }
        else{
            if(files.length > 19){
                img_message.current.innerText = "You cannot go beyond 20 images"
            }
            else{
                setfiles([...files,[ e.target.files[0]]])
                setpreview([...preview, {imag: URL.createObjectURL(e.target.files[0])}])
                img_message.current.innerText = ""
            }
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
        
    }
    const splicep =(i)=>{
        preview.splice(i, 1)
        setpreview(preview)
        
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
    

    // axios
    const Check = async (num, id, name, sub)=> {
        

        try {
            const categs = await axios.get("http://vensle.com/api/api/fresh/category/"+id)
            if(categs.data.length > 1){
                setvisible(num)
            } 
            else{
                try{
                    const tree = await axios.get("http://vensle.com/api/api/fresh/gtree/"+id)
                    // 
                    setpayload({...payload, category:tree.data.join(',')})
                    setopendrop(!opendrop)
                }
                catch(error){
                    
                }
                setbcstore({...bcstore, [sub]:name})
                // catenate(name)
                clone.current.value=name
            }
        } catch (error) {
            
        }
    }


    const validate = (e) =>{
        e.preventDefault()
        setclicked(true)
        const empty = Object.keys(payload).filter(key => payload[key] === null || payload[key] === undefined || payload[key] === "")
        //// console.log(empty)
        if(empty.length >= 1 && files.length < 1){
            setclicked(false)
            for (let index = 0; index < empty.length; index++) {
            if(empty[index] === 'title'){
                name_message.current.innerText = "Item name is required"
                itemname.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'price'){
                price_message.current.innerText = "Price is required"
                itemprice.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'category'){
                category_message.current.innerText = "Choose a category"
                clone.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'description'){
                desc_message.current.innerText = "Describe the product"
                description.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'item_condition'){
                cond_message.current.innerText = "The condition is required"
                itemcondition.current.style.border = '1px solid red'
            }
            else{
                
            }
                
            }
            img_message.current.innerText = "You must select a minimum of one and a maximum of 20 images"
        }
        else if(empty.length >= 1){
            setclicked(false)
            for (let index = 0; index < empty.length; index++) {
            if(empty[index] === 'title'){
                name_message.current.innerText = "Item name is required"
                itemname.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'price'){
                price_message.current.innerText = "Price is required"
                itemprice.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'category'){
                category_message.current.innerText = "Choose a category"
                clone.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'description'){
                desc_message.current.innerText = "Describe the product"
                description.current.style.border = '1px solid red'
            }
            else if(empty[index] === 'item_condition'){
                cond_message.current.innerText = "The condition is required"
                itemcondition.current.style.border = '1px solid red'
            }
            else{
                
            }
                
            }
            // img_message.current.innerText = "You must select a minimum of one and a maximum of 20 images"
        }
        else if(files.length < 1){
            setclicked(false)
            img_message.current.innerText = "You must select a minimum of one and a maximum of 20 images"
        }
        // seterror(current => {
        //     const {submit, ...rest} = current;
        //     return rest;
        //   });
        // if(Object.values(payload).every(value => value) === false){
        //     seterror({...error, submit:'Kindly complete all the fields correctly'})
        //     window.scrollTo(0,0)
        //     
        // }
        // else if(files.length < 1){
        //     seterror({...error, submit:'You must choose images'})
        // }
        else{
            setclicked(true)
            axe(e)
        }
    }
    const handleclick =(val, refs, refss, field)=>{
        const tester = /[`!@#$%^&*_+\-=\[\]{}\\|<>\/?~]/;
        
        if(tester.test(val) === true){
            
            refs.current.style.border = '1px solid red'
            refss.current.innerText = 'Kindly remove special characters'
        }
        else{
            refs.current.style.border = '1px solid gray'
            refss.current.innerText = ''
            setpayload({...payload, [field]:val})
        }
    }
    const handleprice =(val, refs, refss)=>{
        const tester = /[ `!@.#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~abcsefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM]/;
        
        if(tester.test(val) === true){
            
            refs.current.style.border = '1px solid red'
            refss.current.innerText = 'Only numbers are allowed'
        }
        else{
            refs.current.style.border = '1px solid gray'
            refss.current.innerText = ''
            setpayload({...payload, price:val})
        }
    }
   // console.log(bcstore)
    const axe =async (e)=>{
            e.preventDefault()
            
            var data = new FormData();
            data.append('partner_id', id);
            data.append('title', payload.title);
            data.append('price', payload.price);
            data.append('item_condition', payload.item_condition);
            data.append('category', payload.category);
            data.append('location', payload.location);
            data.append('description',payload.description);
            data.append('currency',currency);
            data.append('approved', '0');
            data.append('featured_image', payload.featured_image);
            data.append('featured', 0);
            for (let index = 0; index < files.length; index++) {
                data.append('images['+index+']', files[index][0]);
            } 
            data.append('delivery', payload.delivery);
            try {
                const response = await axios.post('http://vensle.com/api/api/grocery', data);
                // setmsg(response.data.message);
               // console.log(response.data)
                setpayload({
                    featured_image:'0',
                    delivery:1,
                })
                formreset()
                setclicked(false)
                setsuccessful(true)
                window.scrollTo(0,0)
                setTimeout(() => {
                    setsuccessful(false)
                }, 3000);
            } catch (err) {
                //// console.log(err)
                setclicked(false)
                seterror(err.response.data.errors);
            }
        }

    const formreset=()=>{
        clone.current.value = ''
        nameinput.current.value = ''
        descinput.current.value = ''
        priceinput.current.value = ''
        radio1.current.checked = false
        radio2.current.checked = false
        radio3.current.checked = false
        setbcstore({})
        setfiles([])
        setpreview([])
    }
    
    
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Groceries</div>
                        <div><span>{name}</span> <FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Groceries </h3>
                        <div className="location2" onClick={(e)=>setpopmap(true)}> <FontAwesomeIcon icon={faLocationDot} />{userlocation.country }</div>
                    </div>
                    <div className="table-container">
                        {/* <div className="locations" > */}
                            <LocatFinder/>
                        {/* </div> */}
                        {
                            Object.values(error).length >= 1 ?
                            <div className='errors'>
                            {
                                Object.values(error).map((a, i)=>(
                                    <p>{a}</p>
                                ))
                            }
                            </div>
                            :
                            msg ?
                            <div className='success'>
                                {msg}
                            </div>
                            :
                            ''
                            
                        }
                        <h4>Item information</h4>
                        <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'60% 37%', gap:'3%'}}>
                            <div className="adm-main-left" style={{display:'grid'}}>
                                <div>
                                    
                                        <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'100%'}}>
                                            <div style={{margin:'10px 0'}}><label className="input-title">Choose Category</label><span ref={category_message} style={{color:'red', margin:'0 20px', fontSize:'.75em'}}></span></div>
                                            <div className="clone" ref={cloner}>
                                                <input type='text' ref={clone} placeholder='Select a category'  onClick={(e)=>setopendrop(!opendrop)}/>
                                               { 
                                                opendrop === true ?
                                                <div className="drop"  ref={dropref}>
                                               
                                                    {
                                                        visible === 1 ?
                                                        catone.map(({id:one, name:nam, image})=>(
                                                            <div key={one}  className='name'>
                                                                <div onClick={(e)=>{categoryone(one, setcattwo); Check(2, one, nam, 'subone'); setbcstore({subone:nam}) }} className='nam'>
                                                                    <div className="img">
                                                                        <img src={"http://vensle.com/api/storage/category/"+image} alt=""/>
                                                                    </div>
                                                                    <div>{nam}</div>
                                                                </div>
                                                            </div>
                                                        ))
                                                        :
                                                        ''
                                                    }
                                                    {
                                                        visible === 2?
                                                        <div  className="inside"> 
                                                        <div onClick={(e)=>{setvisible(1)}} className='nam'><FontAwesomeIcon icon={faChevronCircleLeft}/> <span> {bcstore.subone}</span></div>
                                                        {
                                                            cattwo.map(({id:two, name:names,parent:parentone, image:images})=>(
                                                                <div key={two}>
                                                                   
                                                                    <div className='subchild' onClick={(e)=>{categoryone(two, setcatthree); Check(3, two,  names, 'subtwo')}}>
                                                                        <div className="img">
                                                                            <img src={"http://vensle.com/api/storage/category/"+images} alt=""/>
                                                                        </div>
                                                                        <div>{names}</div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                        </div>
                                                        :
                                                        ''
                                                    }
                                                    {
                                                        visible === 3 ?
                                                        <div  className="inside"> 
                                                            <div onClick={(e)=>{setvisible(2)}} className='nam'><FontAwesomeIcon icon={faChevronCircleLeft}/> <span> {bcstore.subtwo}</span></div>
                                                            {
                                                                catthree.map(({id, name,parent:parenttwo, image})=>(
                                                                    <div key={id}>
                                                                        <div className='subchild' onClick={(e)=>{categoryone(id, setcatfour); Check(2, id, name, 'subthree');}}>
                                                                            <div className="img">
                                                                                <img src={"http://vensle.com/api/storage/category/"+image} alt=""/>
                                                                            </div>
                                                                            <div>{name}</div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                        :
                                                        ''
                                                    }
                                                    
                                                    {
                                                        visible === 4?
                                                        catfour.map(({id, name,parent:parenttwo, image})=>(
                                                            <div key={id}>
                                                                <div className='subchild' onClick={(e)=>{categoryone(id, setcatfour); setbcstore({...bcstore,  subfour:name})}}>
                                                                    <div className="img">
                                                                        <img src={"http://vensle.com/api/storage/category/"+image} alt=""/>
                                                                    </div>
                                                                    <div>{name}</div>
                                                                </div>
                                                                
                                                            </div>
                                                        ))
                                                        :
                                                        ''
                                                    }
                                                </div>
                                                :
                                                ''
                                                }
                                            </div>
                                            <div className="main-input">
                                                <label className="input-title">Item name</label><span ref={name_message} style={{color:'red', margin:'0 20px', fontSize:'.75em'}}></span>
                                                <div className="input-field" ref={itemname}>
                                                    <input type='text' placeholder='Item name' onChange={(e)=>handleclick(e.target.value, itemname, name_message, 'title')} ref={nameinput}/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                </div>
                                <div className="click-to-upload2"  onClick={(e)=>imgref.current.click()}>
                                    <div><FontAwesomeIcon icon={faImage} /></div>
                                    <div>Add image</div>
                                    <input type="file" ref={imgref} onChange={fileDrop2}    />
                                </div>
                                <span ref={img_message} style={{color:'red', margin:'0 20px', fontSize:'.75em'}}></span>
                                <div className="imgs-container2">
                                
                                {
                                    preview.map(({imag}, i)=>(
                                        <div className="img-box">
                                            <div className="close"><FontAwesomeIcon icon={faClose} onClick={(e)=>{splice(i); splicep(i)}}/></div>
                                            <div className="imgs">
                                                <img src={imag} alt="" />
                                            </div>
                                            <div className="featured-input" title="Make this image the first to show">
                                                { files.length > 1 ? <div><input type='radio' name='featured' onClick={(e)=>setpayload({...payload, feat_image:i+''})}/><span> Feature this image</span></div>:''}
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                                <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'repeat(2, 49%)', gap:'1%'}}>
                                    <div className="main-input">
                                        <label className="input-title">Price</label><span ref={price_message} style={{color:'red', margin:'0 20px', fontSize:'.75em'}}></span>
                                        <div className="input-field" ref={itemprice}>
                                            <div style={{display:'grid', gridTemplateColumns:'50px 1fr', margin:'0', alignItems:'center'}}>
                                                <p>
                                                    {decode(currency)}
                                                </p>
                                                <input type='text' placeholder="Price" onChange={(e)=>handleprice(e.target.value, itemprice, price_message)} ref={priceinput}/>
                                            </div> 
                                        </div> 
                                    </div>
                                    <div className="main-input">
                                        <label className="input-title">Condition</label><span ref={cond_message} style={{color:'red', margin:'0 20px', fontSize:'.75em'}}></span>
                                        <div className="input-field" ref={itemcondition}>
                                            <div style={{display:'grid', gridTemplateColumns:'repeat(3, auto)', margin:'0 20px'}}>
                                                <div className="radio" ><input type="radio" name='condition' value='New' ref={radio1} onClick={(e)=>{setpayload({...payload, item_condition:e.target.value}); cond_message.current.innerText=''; itemcondition.current.style.border='1px solid gray'}}/>New</div>
                                                <div className="radio" ><input type="radio" name='condition' value='Used' ref={radio2} onClick={(e)=>{setpayload({...payload, item_condition:e.target.value}); cond_message.current.innerText=''; itemcondition.current.style.border='1px solid gray'}}/>Used</div>
                                                <div className="radio" ><input type="radio" name='condition' value='N/A' ref={radio3} onClick={(e)=>{setpayload({...payload, item_condition:e.target.value}); cond_message.current.innerText=''; itemcondition.current.style.border='1px solid gray'}}/>N/A</div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="main-input">
                                    <label className="input-title">Description</label><span ref={desc_message} style={{color:'red', margin:'0 20px', fontSize:'.75em'}}></span>
                                    <div className="input-field" ref={description}>
                                        <textarea placeholder="Details" className='class' onChange={(e)=>handleclick(e.target.value, description, desc_message, 'description')} ref={descinput}/>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="adm-main-left">
                            { files.length > 0 ? '' :
                                <div className="click-to-upload" 
                                onDrop={fileDrop}
                                onDragOver={dragOver}
                                onDragEnter={dragEnter}
                                onDragLeave={dragLeave}
                                onClick={(e)=>imgref.current.click()}
                                >
                                    <div><FontAwesomeIcon icon={faImage} /></div>
                                    <div>Click to upload or drag and drop image </div>
                                    
                                </div>
                            }<input type="file" ref={imgref} onChange={fileDrop2}   />
                               <span ref={img_message} style={{color:'red', margin:'0 20px', fontSize:'.75em'}}></span>
                                <div className="imgs-container">
                                
                                {
                                    preview.map(({imag}, i)=>(
                                        <div className="img-box">
                                            <div className="close"><FontAwesomeIcon icon={faClose} onClick={(e)=>{splice(i); splicep(i)}}/></div>
                                            <div className="imgs">
                                                <img src={imag} alt="" />
                                            </div>
                                            <div className="featured-input" title="Make this image the first to show">
                                            { files.length > 1 ? <div><input type='radio' name='featured' onClick={(e)=>setpayload({...payload, feat_image:i+''})}/><span> Feature this image</span></div>:''}
                                            </div>
                                        </div>
                                    ))
                                }
                                
                                </div>
                                { files.length < 1 || files.length > 19? '' :
                                    <div className="plus" onClick={(e)=>imgref.current.click()}>
                                        <div className="plus-b"><FontAwesomeIcon icon={faPlus}/></div>
                                    </div>
                                }
                            </div>
                        
                        </div>
                        <div className="buttons-bottom">
                        {
                            clicked === true ? <button style={{marginTop:'30px'}}>Creating</button> : <button onClick={validate} style={{marginTop:'30px'}}>Create</button> 
                        }
                        <button onClick={formreset} style={{marginTop:'30px', backgroundColor:'rgb(29, 118, 201)'}}>Reset</button>
                        </div>
                    </div>
                </div>
                {
                    successful===true ?
                    <Success />
                    :
                    ''
                }
            </div>
        </div>
    )
}
export default Grocery