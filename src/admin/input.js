import { faDollarSign, faNairaSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Input = ({title, icon, type}) => {
    return(
        <div className="main-input">
            <label className="input-title">{title}</label>
            <div className="input-field">
                {
                    type === 'text' ?
                        <input type='text' placeholder={title}/>
                    : 
                    type === 'select' ?
                    <select>
                        <option value="ghfgfgf">{title}</option>
                    </select> 
                    :
                    type === 'radio' ?
                    <div style={{display:'grid', gridTemplateColumns:'repeat(3, auto)', margin:'0 20px'}}>
                        <div className="radio"><input type="radio" name="condition" value="New" />New</div>
                        <div className="radio"><input type="radio" name="condition" value="New" />Used</div>
                        <div className="radio"><input type="radio" name="condition" value="New" />Not Applicable</div>
                    </div> 
                    :
                    type === 'textarea' ? 
                    <textarea placeholder="Details"/>
                    :
                    type === 'currcombo' ?
                    <div style={{display:'grid', gridTemplateColumns:'15% 85% ', margin:'0', alignItems:'center'}}>
                        <p>
                            <FontAwesomeIcon icon={faDollarSign} />
                        </p>
                        <input type='text' placeholder={title}/>
                    </div> 
                    : null
                }
                
            </div>
        </div>
    )
}
export default Input