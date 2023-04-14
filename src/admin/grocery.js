import { useState, useRef, useEffect,useContext } from "react"
import { faUser, faLocationDot, faCaretRight, faImage, faClose, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Sidebar from "./sidebar"
import Menu from "./menu"
import Input from "./input"
import axios from "axios"
import { UserContext } from "../auth/usercontext"
import Map from "../reusable/maps";

const Grocery = () => {
    const {details:{authlev, name,  id, userlocation, currency}, setDetails} = useContext(UserContext)
    const [visible, setvisible] = useState(1)
    const [opendrop, setopendrop] = useState(false)
    const [bcstore, setbcstore] = useState({})
    const [trans, settrans] = useState([])
    const [catone, setcatone] = useState([])
    const [cattwo, setcattwo] = useState([])
    const [catthree, setcatthree] = useState([])
    const [catfour, setcatfour] = useState([])
    const [msg, setmsg] = useState(' ')
    const [popmap, setpopmap] = useState(false)
    const [radius, setradius] = useState(120)

    useEffect(()=>{
        getparners()
        categoryone(0, setcatone)
    },[])
    // console.log(bcstore)
    const getparners = async () => {
        try {
            const trans = await axios.get("http://geo.vensle.com/api/trans")
            settrans(trans.data)
        } catch (error) {
            console.log(error);
        }
    }
    const categoryone = async (id, step) => {
        try {
            const categs = await axios.get("http://geo.vensle.com/api/fresh/gcategory/"+id)
            step(categs.data)
        } catch (error) {
            console.log(error);
        }
    }
    
    const imgref = useRef('')
    const [feats, setfeats] = useState([
    ])
    const [payload, setpayload] = useState({
        partner_id:'',
        title:'',
        price:'',
        item_condition:'',
        category:'',
        location:'',
        ref_no:'',
        description:'',
        currency:currency,
        feat_image:'',
        features:'',
        featured:'',
        delivery:'',
    })
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

    const [files, setfiles] = useState([])
    const [preview, setpreview] = useState([])
    const fileDrop = (e) =>{
        e.preventDefault()
       for(let index = 0; index < e.dataTransfer.files.length; index++) {
            setfiles([...files, [e.dataTransfer.files[index]]])
            setpreview([...preview, {imag: URL.createObjectURL(e.dataTransfer.files[index])}])
        }
    }
    const fileDrop2 = (e) =>{
        e.preventDefault()
            setfiles([...files,[ e.target.files[0]]])
            setpreview([...preview, {imag: URL.createObjectURL(e.target.files[0])}])
    }
    const splice =(i)=>{
        setfiles(current => {
            const copy = [...current];
            delete current[i];
            return copy
        })
        
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
    const Check = async (num, id, name, sub)=> {
        

        try {
            const categs = await axios.get("http://geo.vensle.com/api/fresh/category/"+id)
            if(categs.data.length > 1){
                setvisible(num)
            } 
            else{
                try{
                    const tree = await axios.get("http://geo.vensle.com/api/fresh/gtree/"+id)
                    setpayload({...payload, category:tree.data.join(',')})
                    setopendrop(!opendrop)
                }
                catch(error){
                    console.log(error)
                }
                setbcstore({...bcstore, [sub]:name})
                // catenate(name)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getname = (name)=> {
        // console.log(name)
        setpayload({...payload, title:name})
    }
    const getprice = (name)=> {
        setpayload({...payload, price:name})
    }
    const getcondition = (name)=> {
        setpayload({...payload, item_condition:name})
    }
    const gettranstype = (name)=> {
        setpayload({...payload, delivery:name})
    }
    const getfeatures = (name, index)=> {
        const idata = [...feats]
        idata[name[1]] = name[0]
        setfeats(idata)
        setpayload({...payload, features:feats})
    }
    const getstate = (name)=> {
        const idata = [...feats]
        idata.splice(name, 1)
        setfeats(idata)
        setpayload({...payload, features:feats})
    }
    const getdescription = (name)=> {
        setpayload({...payload, description:name})
    }
    const axe =async (e)=>{
        e.preventDefault()
        console.log('clicked')
        var data = new FormData();
        data.append('partner_id', id);
        data.append('title', payload.title);
        data.append('price', payload.price);
        data.append('item_condition', payload.item_condition);
        data.append('category', payload.category);
        data.append('location', userlocation.region+'+|+'+userlocation.city+'+|+'+userlocation.country);
        data.append('description',payload.description);
        data.append('currency',currency);
        data.append('approved', '0');
        data.append('feat_image', payload.feat_image);
        data.append('featured', 0);
        for (let index = 0; index < files.length; index++) {
            data.append('images['+index+']', files[index][0]);
        } 
        // for (let index = 0; index < payload.features.length; index++) {
        //     data.append('features['+index+']', payload.features[index]);
        // }
        data.append('delivery', payload.delivery);

        console.log(data)
        try {
			const response = await axios.post('http://geo.vensle.com/api/grocery', data);
            setmsg(response.data.message);
		} catch (err) {
            console.log(err)
			setmsg('An error occured');
		}
    }

    // callbacks
    const close = ()=> {
        setpopmap(false)
    }
    const rad = (name)=> {
        setradius(name)
    }
    return(
        <div>
            <Menu />
            <div className="admin-sec">
                <Sidebar/>
                <div className="adm-main">
                    <div className="breadcrumbs-bar">
                        <div>Home <FontAwesomeIcon icon={faCaretRight} /> Upload</div>
                        <div><span>{name}</span> <FontAwesomeIcon icon={faUser}/></div>
                    </div>
                    <div className="top-trending">
                        <h3>Upload Groceries</h3>
                        <div className="location2"> <FontAwesomeIcon icon={faLocationDot} />{userlocation.country }</div>
                    </div>
                    <div className="table-container">
                        <div className="locations" >
                            <div><FontAwesomeIcon icon={faLocationDot} /> {userlocation.city}</div>
                            <span onClick={(e)=>setpopmap(true)}>Change</span>
                        </div> 
                        <h4>Item information</h4>
                        <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'60% 37%', gap:'3%'}}>
                            <div className="adm-main-left" style={{display:'grid', gap:'30px'}}>
                                <div>
                                    
                                        <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'100%'}}>
                                            <div className="clone">
                                                <input type='text'  placeholder='Select a category' value={Object.values(bcstore).pop()} onClick={(e)=>setopendrop(!opendrop)}/>
                                               { 
                                                opendrop === true ?
                                                <div className="drop">
                                               
                                                    {
                                                        visible === 1 ?
                                                        catone.map(({id:one, name:nam, parent})=>(
                                                            <div key={one}  className='name'>
                                                                <div onClick={(e)=>{categoryone(one, setcattwo); Check(2, one); setbcstore({subone:nam}) }} className='nam'> {nam}</div>
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
                                                                   
                                                                    <div className='subchild' onClick={(e)=>{categoryone(two, setcatthree); Check(3, two); setbcstore({...bcstore, subtwo:names})}}>
                                                                        <div className="img">
                                                                            <img src={"http://geo.vensle.com/storage/category/"+images} alt=""/>
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
                                                                                <img src={"http://geo.vensle.com/storage/category/"+image} alt=""/>
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
                                                                        <img src={"http://geo.vensle.com/storage/category/"+image} alt=""/>
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
                                            <Input title={'Item Name'} icon={''} type={"text"} getreadstate={getname}/>
                                            <Input title={'Item price'} icon={currency} type={"currcombo"} getreadstate={getprice}/>
                                        </div>
                                </div>
                                <div className="click-to-upload2"  onClick={(e)=>imgref.current.click()}>
                                    <div><FontAwesomeIcon icon={faImage} /></div>
                                    <div>Add image</div>
                                    <input type="file" ref={imgref} onChange={fileDrop2}  accept="application/jpg" />
                                </div>
                                <div className="imgs-container2">
                                {
                                    preview.map(({imag}, i)=>(
                                        <div className="img-box">
                                            <div className="close"><FontAwesomeIcon icon={faClose} onClick={(e)=>{splice(i); splicep(i)}}/></div>
                                            <div className="imgs">
                                                <img src={imag} alt="" />
                                            </div>
                                            <div className="featured-input" title="Make this image the first to show">
                                                <input type='radio' name='featured' onClick={(e)=>setpayload({...payload, feat_image:i})}/><span> Feature this image</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                                <div>
                                    <h5>Classification</h5>
                                    <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'repeat(2, 49%)', gap:'1%'}}>
                                        <Input title={'Item Condition'} icon={''} type={"radio"} content={['New', 'Used', 'N/A']} getreadstate={getcondition} name={'condition'}/>
                                        <Input title={'Transaction Type'} icon={''} type={"select"} getreadstate={gettranstype} ddcontent={trans} situation={'disable'}/>
                                        
                                        {
                                            // cattwo.length >= 1 ? <Input title={'Subcategory 1'} icon={''} type={"select"} getreadstate={getsubcategoryone} ddcontent={cattwo}/> : ''
                                        }
                                        {
                                            // catthree.length >= 1 ? <Input title={'Subcategory 2'} icon={''} type={"select"} getreadstate={getsubcategorytwo} ddcontent={catthree}/> : ''
                                        }
                                        
                                    </div> 
                                </div>
                                <div>
                                    {/* <h5>Overview</h5>
                                    <div>
                                       
                                        {
                                            feats.map((data, i)=>(
                                                <Input title={'Features'} icon={''} type={"textarr"} getreadstate={getfeatures} numindex={i} getonstate={getstate}/>
                                            ))
                                        }
                                    </div> 
                                    <div className="fbutton" onClick={(e)=>setfeats([...feats, []])}>Add feature +</div> */}
                                    <Input title={'Description'} icon={''} type={"textarea"} getreadstate={getdescription}/>
                                   { 
                                        //<Input title={'Tags'} icon={''} type={"text"} getreadstate={gettags}/>
                                    }
                                                                   
                                    </div>
                                
                            </div>
                            
                            <div className="adm-main-left">
                                <div className="click-to-upload" 
                                onDrop={fileDrop}
                                onDragOver={dragOver}
                                onDragEnter={dragEnter}
                                onDragLeave={dragLeave}
                                onClick={(e)=>imgref.current.click()}
                                >
                                    <div><FontAwesomeIcon icon={faImage} /></div>
                                    <div>Click to upload or drag and drop image </div>
                                    <input type="file" ref={imgref} onChange={fileDrop2}  accept="application/jpg" />
                                </div>
                               
                                <div className="imgs-container">
                                {
                                    preview.map(({imag}, i)=>(
                                        <div className="img-box">
                                            <div className="close"><FontAwesomeIcon icon={faClose} onClick={(e)=>{splice(i); splicep(i)}}/></div>
                                            <div className="imgs">
                                                <img src={imag} alt="" />
                                            </div>
                                            <div className="featured-input" title="Make this image the first to show">
                                                <input type='radio' name='featured' onClick={(e)=>setpayload({...payload, feat_image:i})}/><span> Feature this image</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        
                        </div>
                        
                        <button onClick={axe}>Create</button> 
                        <div>{msg}</div>
                    </div>
                </div>
                {
                    popmap===true ?
                    <Map getref={close} getrad={rad} rad={radius} height={'300px'}/>
                    :
                    ''
                }
            </div>
        </div>
    )
}
export default Grocery