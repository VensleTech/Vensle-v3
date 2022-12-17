import Pcards from "./pcards"

const Psections = ({sects, info, start, num}) => {
    return (
        <div>
            <div className="section">
                <div className="title">
                    <h2>{info}</h2>
                </div>
                <div className="other">
                {
                    sects.slice(start, start+3).map(({id, img, title, price})=>(
                        <div><Pcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={title} price={price} img={img}/></div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default Psections