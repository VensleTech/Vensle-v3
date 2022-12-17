import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Redir = () => {
    const {id} = useParams()
    const nav = useNavigate()
    useEffect(() => {
        axe()
    }, [])

    const [msg, setmsg] = useState('initialState')
    const axe =async (e)=>{
        const data = id
        try {
			const response = await axios.post('http://geo.vensle.com/api/verify', data);
            if(response.data.status === 200){
                nav('/')
            }
            else{
                setmsg(response.data.message);
            }
		} catch (err) {
            console.log(err)
			setmsg('An error occured');
		}
    }
    return(
        <div>
        {id}
        </div>
    )
}
export default Redir