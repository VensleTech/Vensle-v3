import { useState, useRef, useEffect } from "react"
import { faUser, faLocationDot, faFilter, faImage, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Sidebar from "./sidebar"
import Menu from "./menu"
import Input from "./input"
import axios from "axios"

const Upload = () => {

    const [group, setgroup] = useState([])
    const [categs, setcategs] = useState([])
    const [trans, settrans] = useState([])
    const [msg, setmsg] = useState(' ')
    useEffect(()=>{
        getparners()
    },[])
    const getparners = async () => {
        try {
            const group = await axios.get("http://geo.vensle.com/api/group")
            const categs = await axios.get("http://geo.vensle.com/api/category")
            const trans = await axios.get("http://geo.vensle.com/api/trans")
            settrans(trans.data)
            setcategs(categs.data)
            setgroup(group.data)
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
        pricetype:'',
        price:'',
        quantity:'',
        item_condition:'',
        item_group:'',
        category:'',
        location:'',
        ref_no:'',
        description:'',
        currency:'',
        tags:'',
        feat_image:'',
        features:'',
        featured:'',
        delivery:'',
    })
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
    
    // console.log(payload)

    const dragEnter = (e) => {
        e.preventDefault()
    }
    const dragOver = (e) => {
        e.preventDefault()
    }
    const dragLeave = (e) => {
        e.preventDefault()
    }

    const getname = (name)=> {
        // console.log(name)
        setpayload({...payload, title:name})
    }
    const getmin = (name)=> {
        setpayload({...payload, pricetype:name})
    }
    const getmax = (name)=> {
        setpayload({...payload, price:name})
    }
    const getcondition = (name)=> {
        setpayload({...payload, item_condition:name})
    }
    const getgroup = (name)=> {
        setpayload({...payload, item_group:name})
    }
    const getcategory = (name)=> {
        setpayload({...payload, category:name})
    }
    const gettranstype = (name)=> {
        setpayload({...payload, delivery:name})
    }
    const getquantity = (name)=> {
        setpayload({...payload, quantity:name})
    }
    const getfeatures = (name, index)=> {
        // console.log(name)
        // setpayload({...payload, features:name})
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
    const gettags = (name)=> {
        setpayload({...payload, tags:name})
    }
    const getfeatured = (name)=> {
        setpayload({...payload, featured:name-1})
    }
    console.log(payload)
    console.log(feats)
    console.log(categs)

    // console.log(files[0][0])
    const axe =async (e)=>{
        e.preventDefault()
        console.log('clicked')
        var data = new FormData();
        data.append('user_id', '33');
        data.append('title', payload.title);
        data.append('min_price', payload.price);
        data.append('max_price', payload.price);
        data.append('quantity', payload.quantity);
        data.append('item_condition', payload.item_condition);
        data.append('item_group', payload.item_group);
        data.append('category', payload.category);
        data.append('location', 'Mararaba, Karu, Nigeria');
        data.append('description',payload.description);
        data.append('currency', '$');
        data.append('tags', payload.tags);
        data.append('approved', '1');
        data.append('feat_image', payload.feat_image);
        data.append('featured', 0);
        for (let index = 0; index < files.length; index++) {
            data.append('images['+index+']', files[index][0]);
        } 
        for (let index = 0; index < payload.features.length; index++) {
            data.append('features['+index+']', payload.features[index]);
        }
       
        
        data.append('delivery', payload.delivery);

        console.log(data)
        try {
			const response = await axios.post('http://geo.vensle.com/api/requests', data);
            setmsg(response.data.message);
            console.log(response.data);
		} catch (err) {
            console.log(err)
			setmsg('An error occured');
		}
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
                        <h3>Request an item</h3>
                        <div> <FontAwesomeIcon icon={faLocationDot} />Nigeria</div>
                    </div>
                    <div className="table-container">
                        <h4>Item information</h4>
                        
                        <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'60% 37%', gap:'3%'}}>
                            <div className="adm-main-left" style={{display:'grid', gap:'30px'}}>
                                <div>
                                    <h5>Taxonomy</h5>
                                        <Input title={'Item Name'} icon={''} type={"text"} getreadstate={getname}/>
                                        <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'repeat(2, 49%)', gap:'1%'}}>
                                            <Input title={'Minimum price'} icon={''} type={"currcombo"} getreadstate={getmin}/>
                                            <Input title={'Maximum price'} icon={''} type={"currcombo"} getreadstate={getmax}/>
                                            <Input title={'Quantity'} icon={''} type={"text"} getreadstate={getquantity} />
                                        </div>
                                </div>
                                <div>
                                    <h5>Classification</h5>
                                    <div className="adm-main-second" style={{display:'grid', gridTemplateColumns:'repeat(2, 49%)', gap:'1%'}}>
                                        <Input title={'Item Condition'} icon={''} type={"radio"} content={['New', 'Used', 'N/A']} getreadstate={getcondition} name={'condition'}/>
                                        <Input title={'Transaction Type'} icon={''} type={"select"} getreadstate={gettranstype} ddcontent={trans}/>
                                        <Input title={'Group'} icon={''} type={"select"} getreadstate={getgroup} ddcontent={group}/>
                                        <Input title={'Category'} icon={''} type={"select"} getreadstate={getcategory} ddcontent={categs.filter(items => items.item_group === payload.item_group)}/>
                                    </div> 
                                </div>
                                <div>
                                    <h5>Overview</h5>
                                    <div>
                                       
                                        {
                                            feats.map((data, i)=>(
                                                <Input title={'Features'} icon={''} type={"textarr"} getreadstate={getfeatures} numindex={i} getonstate={getstate}/>
                                            ))
                                        }
                                    </div> 
                                    <div className="fbutton" onClick={(e)=>setfeats([...feats, []])}>Add feature +</div>
                                    <Input title={'Description'} icon={''} type={"textarea"} getreadstate={getdescription}/>
                                    <Input title={'Tags'} icon={''} type={"text"} getreadstate={gettags}/>
                                    
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

            </div>
        </div>
    )
}
export default Upload