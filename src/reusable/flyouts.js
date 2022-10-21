import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons" 
const Flyouts = ({position, margin, title, icon}) => {
    return (
        <div >
            <div className="flyouts" style={{position:position, margin:margin, zIndex:'1100', }}>
                <div className="title" style={{display:'grid', gridTemplateColumns:'repeat(2, auto)', justifyContent:'start', alignItems:'center', gap:'10px', fontSize:'1.1em'}}>
                {icon}<h2>{title}</h2>
                </div>
                <div className="content">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Flyouts