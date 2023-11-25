import { faDollarSign, faNairaSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { decode } from "html-entities"
import { useState } from "react"

const Input = ({title, icon, type, getreadstate, ddcontent, numindex, name, content, geterrorstate,values, vals, value}) => {

    const [types, settypes] = useState('')
    const [desc, setdesc] = useState(values)
    // const [desc, setdesc] = useState('')
    // const combo = () => {
    //    // console.log(types+':'+desc)
    //     getreadstate([types+':'+desc, numindex])
    // }
    
    const clickup = ( e, type ) =>{
        getreadstate(e.target.value)
        setdesc(e.target.value)
    }
    //// console.log(value)

    return(
        <div className="main-input">
            <label className="input-title">{title}</label>
            <div className="input-field">
                {
                    type === 'text' ?
                        <input type='text' placeholder={value === undefined ? title : value} onChange={(e)=>clickup(e, 'text')} value={desc}/>
                    : 
                    type === 'number' ?
                        <input type='number' placeholder={value === '' ? title : value} onChange={(e)=>clickup(e, 'number')} value={desc}/>
                    : 
                    type === 'email' ?
                        <input type='email' placeholder={value === '' ? title : value} onChange={(e)=>clickup(e, 'email')} value={desc}/>
                    : 
                    type === 'password' ?
                    <input type='password' placeholder={value === '' ? title : value} onChange={(e)=>clickup(e, 'password')} value={desc}/>
                : 
                //     type === 'textarr' ?
                //     <div className="finput" value={vals}>
                //     <input type='text' placeholder='Feature' onChange={(e)=>{settypes(e.target.value); combo()}} style={{width:'100%'}}/>
                //     <span>|</span>
                //     <input type='text' placeholder='Details' onChange={(e)=>{setdesc(e.target.value); combo()}} style={{width:'100%'}}/>
                    
                //     </div>
                // : 
                    type === 'select' ?
                    <select onChange={(e)=>clickup(e, 'select')}>
                        <option>{title}</option>
                        {
                            ddcontent.map(({id, name})=>(
                                <option value={id}>{name}</option>
                            ))
                        }
                    </select> 
                    :
                    type === 'radio' ?
                    <div style={{display:'grid', gridTemplateColumns:'repeat(3, auto)', margin:'0 20px'}}>
                    {
                        content.map((a,i)=>(
                            <div className="radio"><input type="radio" name={name} value={i+1} onChange={(e)=>getreadstate(e.target.value)}/>{a}</div>
                        ))
                    }
                        
                        
                    </div>
                    :
                    type === 'textarea' ? 
                    <textarea placeholder="Details" onChange={(e)=>clickup(e, 'textarea')} className='class' value={desc}/>
                    :
                    type === 'currcombo' ?
                    <div style={{display:'grid', gridTemplateColumns:'15% 85% ', margin:'0', alignItems:'center'}}>
                        <p>
                            {decode(icon)}
                        </p>
                        <input type='text' placeholder={title} onChange={(e)=>clickup(e, 'currency')}/>
                    </div> 
                    : null
                }
                
            </div>
        </div>
    )
}
export default Input