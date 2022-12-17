import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons" 
const Flyouts = ({position, margin, title, icon, cat, background, align, type, getreadstate, getcat, gc }) => {
    const bill = (e)=>{
        if(e.target === e.currentTarget){
            getreadstate(false)
        }
      }
      const billy = (name, type)=>{
        getreadstate(false)
        getcat(name)
        // console.log('object')
      }
      const bills = (name, type)=>{
        getreadstate(false)
        getcat(name, type)
      }
    //   console.log(gc)
    return (
        <div style={{position:position, top:0, left:0,margin:margin, zIndex:'1900', background:background, width:'100%', height:'100%', display:'grid', justifyContent:'center', alignItems:align}} onScroll={bill} onWheel={bill} onClick={bill}>
            <div className="flyouts">
                <div className="title" style={{display:'grid', gridTemplateColumns:'repeat(2, auto)', justifyContent:'start', alignItems:'center', gap:'10px', fontSize:'1.1em'}}>
                {icon}<h2>{title}</h2>
                </div>
                <div className="content">
                {
                    cat.map(({id, state}, i)=>(
                        <div key={id} onClick={(e)=>bills(state, type)} >{state}</div>
                    ))
                }
                    
                </div>
            </div>
        </div>
    )
}
export default Flyouts