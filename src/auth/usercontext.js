import axios from "axios";
import { useState, createContext, useEffect} from "react";

export const UserContext = createContext()


const UsedContext = (props) => {
//    main store
    const [details, setDetails] = useState({
        name:'',
        authlev:'',
        specialref:'',
        business_name:'',
        email:'', 
        phone:'', 
        address:'', 
        location:[],
        userlocation:{},
        currency:'',
        shippingaddress:'',
        item:[],
        cookies:''
    })

    const [products, setproducts] = useState([])
    const [requests, setrequests] = useState([])
    const [groceries, setgroceries] = useState([])





    // states
    const [causerefresh, setcauserefresh] = useState(0)
    const [coords, setcoords] = useState({
        lat:'',
        long:''
    })






    // effects
    //      1. (i)fire the ip address locator function on load
    //        (ii)get stored details in the local storage on load
    useEffect(()=>{
        getloc()
        bring()
    },[])
    //      2. fire the google address locator function on coords change
    useEffect(()=>{
        glocs()
    },[coords])
    //      3. fire the products fetch  function on details.userlocation change
    useEffect(()=>{
        currgetter(details.userlocation.country)
        getproducts()
    },[details.userlocation.country])






    //pure functions
    // 1. Get the currency of the country
    const currgetter = (state) => {
        console.log(state)
        switch (state) {
            case  "United States" :
                setDetails( {...details,
                    currency:'&#36;'
                })
                return;
            case  "Nigeria" :
                setDetails( {...details,
                    currency:'&#8358;'
                })
                return;
            case  "United Kingdom" :
                setDetails( {...details,
                    currency:'&#163;'
                })
                return;
            default:
                setDetails( {...details,
                    currency:'&#8358;'
                })
                return;
        }
    }

    //axios functions

    // 1. Get location coords using IP address locator
    const getloc = async () => {
        try {
            const response = await axios.get('http://ip-api.com/json/');
            const {lat, lon, city} = response.data
            console.log(response.data)
            setcoords({
                lat:lat,
                long:lon,
                city:city,
            })
        } catch (error) {
            setcoords({
                lat:54.9808232,
                long:-1.4202538,
            })
            // console.log(error);
            // start shopping in United Kingdom
        }
    }
    // 2. Get location details using the coords and set location
    const glocs =async (e)=>{
        const parameter = coords.lat+','+coords.long
        try {
			const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+parameter+'&key=AIzaSyDpLFDonki5cq8ESXkTqcfgQMJK2Zf8GqA');
            console.log(response)
            setDetails( {...details,
                userlocation:
                    {
                        lat:response.data.results[0].geometry.location.lat,
                        long:response.data.results[0].geometry.location.lng,
                        country:response.data.results[0].address_components.filter((items)=>items.types[0]==="country")[0].long_name,
                        region:response.data.results[0].formatted_address,
                        city:response.data.results[0].address_components.filter((items)=>items.types[1]==="sublocality" || items.types[0]==="postal_town" || items.types[0]==="locality" || items.types[0]==="administrative_area_level_1")[0].long_name,
                    }
            })
            // setcauserefresh(1)
		} catch (err) {
            console.log(err)
		}
    }
    // 3. Get products based on the country and populate the 
    //      products, grocery and request stores
    const getproducts =async (e)=>{
        try {
			const products = await axios.get("http://geo.vensle.com/api/product/"+details.userlocation.country);
			const requests = await axios.get("http://geo.vensle.com/api/request/"+details.userlocation.country);
			const groceries = await axios.get("http://geo.vensle.com/api/groceries/"+details.userlocation.country);
            setproducts(products.data)  
            setrequests(requests.data)  
            setgroceries(groceries.data)              
		} catch (err) {
            console.log(err)
		}
    }

    const bring = () => {
        // localStorage.setItem('logs', JSON.stringify(details))
        const truth = localStorage.getItem('logs');
        if(truth){
            const kept = JSON.parse(localStorage.getItem('logs'))
            const {id,name, business_name, email, authlev, phone, address,specialref} = kept
            setDetails({...details,
                id:id,
                name:name,
                authlev:authlev,
                business_name: business_name,
                email: email,
                phone: phone,
                address: address,
                specialref:specialref,

            })
        }
    }
    console.log(coords)
    console.log(details)
    console.log(groceries)
        
    return(
        <UserContext.Provider value={{details, setDetails,products,requests,groceries}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UsedContext;