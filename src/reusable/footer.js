import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
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
                    <h3>Buy</h3>
                    <p>Delivery Options</p>
                    <p>Repot a product</p>
                    <p>How to return a product</p>
                    <p>Categories</p>
                    <p>Bidding  help</p>
                </div>
                <div>
                    <h3>Sell</h3>
                    <p>Start Selling</p>
                    <p>Learn to sell</p>
                    <p>Quick setup</p>
                    <p>Create a profile</p>
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
                <div>
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
                <div><img src="../../images/brands (5).jpg" alt=""/></div>
                <div><img src="../../images/brands (7).jpg" alt=""/></div>
                <div><img src="../../images/brands (6).jpg" alt=""/></div>
                <div><img src="../../images/brands (1).webp" alt=""/></div>
                <div><img src="../../images/brands (4).jpg" alt=""/></div>
                <div><img src="../../images/brands (3).webp" alt=""/></div>
            </div>
            
            <div className="foot-bottom">
                <div className="hr"></div>
                <p>Copyright &copy 2022. Vensle MarketPlace All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Foot