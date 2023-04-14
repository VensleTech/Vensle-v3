import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons" 
const Dropdown = ({position, margin, title, icon, cat, background, align, type, getreadstate, getcat, gc }) => {
    const bill = (e)=>{
        if(e.target === e.currentTarget){
            getreadstate(false)
        }
      }
      const billy = (name, type)=>{
        getreadstate(false)
        getcat(name)
        console.log('object')
      }
      const bills = (name, type)=>{
        getreadstate(false)
        getcat(name, type)
      }
      console.log(gc)
    return (
        <div className="dd" style={{position:position, top:0, left:0,margin:margin, zIndex:'1900', background:background, width:'100%', height:'100%', display:'grid', justifyContent:'center', alignItems:align}} onScroll={bill} onWheel={bill} onClick={bill}>
            <div className="flyouts">
                <div className="title" style={{display:'grid', gridTemplateColumns:'repeat(2, auto)', justifyContent:'start', alignItems:'center', gap:'10px', fontSize:'1.1em'}}>
                {icon}<h2>{title}</h2>
                </div>
                <div className="contents">
                { 
                    gc.map(({id, name, cat_name}, i)=>(
                        <div key={id}  >
                        <h4>{name.substring(0, 30)}</h4>
                        <div className="hr"></div>
                        {
                            cat_name.split(',').slice(0,6).map((a, i)=>(
                                <p onClick={(e)=>billy(a)}>{a}</p>
                            ))
                        }
                            
                        </div>
                    ))
                }
                    
                </div>
            </div>
        </div>
    )
}
export default Dropdown