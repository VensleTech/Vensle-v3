import { faDollarSign, faNairaSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Input = ({title, icon, type, getreadstate, ddcontent, numindex, name, content, getonstate, vals}) => {

    const [types, settypes] = useState('')
    const [desc, setdesc] = useState('')
    const combo = () => {
        console.log(types+':'+desc)
        getreadstate([types+':'+desc, numindex])
    }
    const clickup = ( e, type ) =>{
        if (type === 'text' && e.target.value !== ''  &&  e.target.value.match(/^[a-z]+$/i)) {
            getreadstate(e.target.value)
            e.target.style.border = '1px solid green'
        }
        else if (type === 'number' && e.target.value !== ''  &&  e.target.value.match(/^[0-9]+$/)) {
            getreadstate(e.target.value)
            e.target.style.border = '1px solid green'
        }
        else if (type === 'select' && e.target.value !== "") {
            getreadstate(e.target.value)
            console.log(e.target.value)
            e.target.style.border = '1px solid green'
        }
        else if (type === 'textarea' && e.target.value !== "" ) {
            getreadstate(e.target.value)
            console.log(e.target.value)
            e.target.style.border = '1px solid green'
        }
        else if (type === 'currency' && e.target.value !== "" && e.target.value.match(/^[0-9]+$/)) {
            getreadstate(e.target.value)
            console.log(e.target.value)
            e.target.style.border = '1px solid green'
        }
        else{
            e.target.style.border = '1px solid red'
        } 
    }

    return(
        <div className="main-input">
            <label className="input-title">{title}</label>
            <div className="input-field">
                {
                    type === 'text' ?
                        <input type='text' placeholder={title} onChange={(e)=>clickup(e, 'text')}/>
                    : 
                    type === 'number' ?
                        <input type='number' placeholder={title} onChange={(e)=>clickup(e, 'number')}/>
                    : 
                    type === 'textarr' ?
                    <div className="finput" value={vals}>
                    <input type='text' placeholder='Feature' onChange={(e)=>{settypes(e.target.value); combo()}} style={{width:'100%'}}/>
                    <span>|</span>
                    <input type='text' placeholder='Details' onChange={(e)=>{setdesc(e.target.value); combo()}} style={{width:'100%'}}/>
                    
                    </div>
                : 
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
                    <textarea placeholder="Details" onChange={(e)=>clickup(e, 'textarea')} className='class'/>
                    :
                    type === 'currcombo' ?
                    <div style={{display:'grid', gridTemplateColumns:'15% 85% ', margin:'0', alignItems:'center'}}>
                        <p>
                            <FontAwesomeIcon icon={faDollarSign} />
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