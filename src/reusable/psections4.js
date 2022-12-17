import Pcards from "./pcards"

const Psection4 = ({sects, info, start}) => {
    return (
        <div>
            <div className="section">
                <div className="title">
                    <h2>{info}</h2>
                </div>
                <div className="others">
                {
                    sects.slice(start, start+4).map(({id, img, title, price})=>(
                        <div><Pcards type={3} pdsize={'.9em'} pcsize={'1em'} id={id} title={title} price={price} img={img}/></div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default Psection4