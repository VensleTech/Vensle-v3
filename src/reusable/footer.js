import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Foot = () => {
    const [partners, setpartners] = useState([])
    // useEffect(()=>{
    //     getparners()
    // },[])
    // const getparners = async () => {
    //     try {
    //         const partners = await axios.get('../.http://geo.vensle.com/partners.json')
    //         setpartners(partners.data)
    //      } catch (error) {
    //         console.log(error);
    //      }
    // }
    return (
        <div className="foot">
            <div className="foot-top">
                <div>
                    <h3>Company</h3>
                    <p><Link to={'/privacy-policy'} style={{color:'black'}}>Privacy Policy</Link></p>
                    <p><Link to={'/terms-of-use'} style={{color:'black'}}>Terms of Use</Link></p>
                    <p><Link to={'/product-listing'} style={{color:'black'}}>Product Listing</Link></p>
                    <p>Report a product</p>
                    <p><Link to={'/faq'} style={{color:'black'}}>FAQ</Link></p>
                </div>
                <div>
                    <h3>Sell</h3>
                    <p><Link to={'/admin/place'} style={{color:'black'}}>Start Selling</Link></p>
                    <p><Link to={'/tutorial'} style={{color:'black'}}>Learn to sell</Link></p>
                    <p><Link to={'/tutorial-settings'} style={{color:'black'}}>Quick setup</Link></p>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Company info</p>
                    <p>News</p>
                    <p>Investors</p>
                    <p>Careers</p>
                    <p>Advertise with us</p>
                    <p>Policies</p>
                </div>
                <div>
                    <h3>Stay Connected</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Pinterest</p>
                    <p>Youtube</p>
                </div>
                <div >
                    <h3>Vensle International</h3>
                    <div className="countries">
                        <p>United Kingdom</p>
                        <p>Nigeria</p>
                        <p>Peru</p>
                        <p>USA</p>
                        <p>Cuba</p>
                        <p>Algeria</p>
                        <p>South Africa</p>
                        <p>Ghana</p>
                        <p>Uganda</p>
                        <p>Cape Verde</p>
                        <p>Benin</p>
                        <p>Ivory Coast</p>
                    </div>
                </div>
            </div>
            <div className="logos"> 
            </div>
            
            <div className="foot-bottom">
                <div className="hr"></div>
                <p>Copyright &copy 2022. Vensle MarketPlace All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Foot