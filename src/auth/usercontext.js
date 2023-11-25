import axios from "axios";
import { useState, createContext, useEffect} from "react";

export const UserContext = createContext()


const UsedContext = (props) => {
//    main store
    const [details, setDetails] = useState({
        id:'',
        name:'',
        authlev:'',
        specialref:'',
        business_name:'',
        email:'', 
        phone:'', 
        address:'', 
        profile_image:'', 
        location:[],
        userlocation:{},
        currency:'',
        flag:'',
        shippingaddress:'',
        item:[],
        cookies:''
    })

    const [products, setproducts] = useState([])
    const [requests, setrequests] = useState([])
    const [groceries, setgroceries] = useState([])
    const [orders, setorders] = useState([])
    const [messages, setmessages] = useState([])
    const [collapse, setcollapse] = useState(false)





    // states
    const [causerefresh, setcauserefresh] = useState(0)
    const [coords, setcoords] = useState({
        lat:'',
        long:'',
        iso:''
    })






    // effects
    //      1. (i)fire the ip address locator function on load
    //        (ii)get stored details in the local storage on load
    useEffect(()=>{
        bring()
    },[])
    //      2. fire the google address locator function on coords change
    useEffect(()=>{
        getloc()
    },[])
    //      2. fire the google address locator function on coords change
    useEffect(()=>{
        getflag(coords.iso)
    },[coords])
    //      3. fire the products fetch  function on details.userlocation change
    useEffect(()=>{
        getproducts()
    },[details.userlocation.country])

    useEffect(()=>{
        currgetter(details.userlocation.country)
    },[details.userlocation.country], details.authlev)
    // 4. Check if signed in

    useEffect(() => {
        glocs()
    }, [])


    useEffect(() => {
        // getflag()
    }, [coords.iso])
    
    useEffect(()=>{
        order()
    },[])

    useEffect(()=>{
        axe()
    },[details.id])


    //pure functions
    // 1. Get the currency of the country
    const currgetter = (state) => {
       // console.log(state)
        switch (state) {
            case  "United States" :
                setDetails({...details,
                    currency:'&#36;'
                })
                return;
            case  "Nigeria" :
                setDetails({...details,
                    currency:'&#8358;'
                })
                return;
            case  "United Kingdom" :
                setDetails({...details,
                    currency:'&#163;'
                })
                return;
            default:
                setDetails({...details,
                    currency:'&#8358;'
                })
                return;
        }
    }

    //axios functions

    // 1. Get location coords using IP address locator
    const getloc = async () => {
        try {
            const response = await axios.get('https://ipapi.co/json/');
            const {latitude, longitude, city, country_name, country_code} = response.data
           console.log(response.data)
            setcoords({
                lat:latitude,
                long:latitude,
                city:city,
                country:country_name,
                iso:country_code
            })
            setDetails({...details,
                userlocation:
                    {
                        lat:latitude,
                        long:latitude,
                        city:city,
                        country:country_name,
                        iso:country_code
                    }
            })
            // currgetter(country)
            // getflag(countryCode)
        } catch (error) {
            // setcoords({
            //     lat:54.9808232,
            //     long:-1.4202538,
            // })
            console.log(error);
            // start shopping in United Kingdom
        }
    }
    // 2. Get location details using the coords and set location
    const glocs =async (e)=>{
        const parameter = coords.lat+','+coords.long
        try {
			const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+parameter+'&key=AIzaSyApX1_YTCQVj8dOQC1lWT3CJFupMGaJySA');
           console.log(response)
            setDetails( {...details,
                userlocation:
                    {
                        lat:response.data.results[0].geometry.location.lat,
                        long:response.data.results[0].geometry.location.lng,
                        // country:response.data.results[0].address_components.filter((items)=>items.types[0]==="country")[0].long_name,
                        country:coords.country,
                        region:response.data.results[0].formatted_address,
                        city:response.data.results[0].address_components.filter((items)=>items.types[1]==="sublocality" || items.types[0]==="postal_town" || items.types[0]==="locality" || items.types[0]==="administrative_area_level_1")[0].long_name,
                    }
            })
            // setcauserefresh(1)
		} catch (err) {
            // setDetails( {...details,
            //     userlocation:
            //         {
            //             lat:coords.lat,
            //             long:coords.long,
            //             country:'United Kingdom',
            //             city:coords.city,
            //             code:coords.iso
            //         }
            // })
           console.log(err)
		}
    }
    // 3. Get products based on the country and populate the 
    //      products, grocery and request stores
    const getproducts =async (e)=>{
        try {
			const products = await axios.get("http://vensle.com/api/api/product/"+details.userlocation.country);
			const requests = await axios.get("http://vensle.com/api/api/request/"+details.userlocation.country);
			const groceries = await axios.get("http://vensle.com/api/api/groceries/"+details.userlocation.country);
            setproducts(products.data)  
            setrequests(requests.data)  
            setgroceries(groceries.data)              
		} catch (err) {
           // console.log(err)
		}
    }
    // 1. Get location coords using IP address locator
    const getflag = async (val) => {
        const data = {
            iso2: val
        }
        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', data);
            const {error, data:{flag}} = response.data
            // console.log(response.data)
            if(error === false){
                setDetails({...details,
                        flag:flag,
                    })
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    const order = async() => {
        try {
            const product = await axios.get('http://vensle.com/api/api/order')
            setorders(product.data)
            // console.log(product.data)
        } catch (error) {
            // console.log(error);
        }
    }
    const axe =async ()=>{
        //// console.log('coming up')
        var data ={accountid:''+details.id};

       // console.log(data)
        try {
			const response = await axios.post('http://vensle.com/api/api/lastmessage', data);
           console.log(response.data)
            setmessages(response.data);
            // setlast(response.data[0].msg);
           // console.log(response.data);
		} catch (err) {
           console.log(err)
			// setpayload('An error occured');
		}
    }
    const bring = () => {
        const truth = localStorage.getItem('logs');
        getloc()
        if(truth){
            const kept = JSON.parse(truth)
            // console.log(kept)
            const {id,name, authlev, business_name, email, address,phone,specialref, profile_image, currency } = kept
            setDetails({...details, 
                id:id,
                name:name,
                authlev:authlev,
                specialref:specialref,
                business_name: business_name,
                email: email,
                phone: phone,
                address: address,
                profile_image:profile_image, 
                currency: currency
            })
        }
    }
//    console.log(coords)
//    console.log(details)
   console.log(products)
        
    return(
        <UserContext.Provider value={{details, setDetails,products,requests,groceries, orders, messages, collapse, setcollapse}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UsedContext;