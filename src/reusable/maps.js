import axios from "axios";
import { useState, useEffect, useRef, useContext, useMemo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faClose, faLocationDot, faNairaSign, faDollarSign, faUser, faBars, faShoppingCart, faShoppingBag, faShoppingBasket, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../auth/usercontext"
import { GoogleMap, useLoadScript, MarkerF, CircleF } from "@react-google-maps/api";
import { useGeoLocation } from "use-geo-location";

const Map  = ({getref, getrad, rad, height}) => {
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
    },[])
    // google boiler
    const {isLoaded} =useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_GMAP
    })


    // destructure context
        const {details, details:{userlocation}, setDetails} = useContext(UserContext)
        


    // states
    const [drop, setdrop] = useState(false)
    const [dropkm, setdropkm] = useState(0)
    const [radius, setradius] = useState(2000)
    const [zoom, setzoom] = useState(11)
    const [newadd, setnewadd] = useState(userlocation)
    const [inpval, setinpval] = useState(userlocation.city)
    const [addresses, setaddresses] = useState([])

    // destructure newadd

    const {lat, long} =newadd

    // memoizing
    const center = useMemo(()=>({lat:lat, lng:long}), [lat, long])
    // functions

    // 1. fetch the location from google
    const fetchlocs =async (val)=>{
        try {
			// const response = await axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+val+'&inputtype=textquery&key=AIzaSyDpLFDonki5cq8ESXkTqcfgQMJK2Zf8GqA&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry');
			const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+val+'&key='+process.env.REACT_APP_GMAP);
           // console.log(response.data.results);
           // console.log(response.data.results[0].address_components.filter(items=>items.types[0] === 'country')[0].long_name);
            
            setaddresses(response.data.results);
            
            setdrop(1)
            
		} catch (err) {
           // console.log(err)
		}
    }

    // 2. Change Address function
    const changeaddr =async (val)=>{
       
       // console.log(val)
        const {geometry, formatted_address, address_components} =val
        // then i set a state to hold the valuesthat i intend to use in the change
        // location function changefunc()
        setnewadd({
            lat:geometry.location.lat,
            long:geometry.location.lng,
            country:address_components.filter((items)=>items.types[0]==="country")[0].long_name,
            fadd:formatted_address,
            city:address_components.filter((items)=>items.types[1]==="sublocality" || items.types[0]==="postal_town" || items.types[0]==="locality" || items.types[0]==="administrative_area_level_1")[0].long_name,
        })
       setzoom(11)
       setradius(2000)
    }

    // 3. Update the location across board
    const changeloc =async ()=>{
        setDetails( {...details,
            userlocation:{
                lat:newadd.lat,
                long:newadd.long,
                region:newadd.fadd,
                country:newadd.country,
                city:newadd.city,
            }
        })
        getref()
        getrad(radius)
    }

    // 4. Choose the zoom level
    const zoomer = (val) => {
        switch (parseInt(val)) {
            case 2000:
                setzoom(12.5)
                return;
            case 5000:
                setzoom(11.5)
                return;
            case 10000:
                setzoom(10.5)
                return;
            case 15000:
                setzoom(9.5)
                return;
            case 20000:
                setzoom(8.5)
                return;
            case 50000:
                setzoom(7.5)
                return;
            case 100000:
                setzoom(5.6)
                return;
            case 200000:
                setzoom(4.5)
                return;
            case 300000:
                setzoom(4.3)
                return;
            case 400000:
                setzoom(4.6)
                return;
            case 500000:
                setzoom(4.4)
                return;
            default:
                break;
        }
    }
    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.4,
        strokeWeight: .5,
        fillColor: '#FF0000',
        fillOpacity: 0.15,
    }
    return(
        <div className="location-pop">
                <div className="lp-inner">
                    <div className="lp-inner-one">
                        <p>Change location </p>
                        <div onClick={(e)=>{document.body.style.overflow = 'unset'; getref()}}><FontAwesomeIcon icon={faClose} /></div>
                    </div>
                    <div className="scroll-inner">
                        <div className="lp-curr">Search by town, city, neighbourhood or postal code.</div>
                        <div className="lp-inner-two">
                            <div><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div>
                                <p>Location</p>
                                <input type='text' placeholder="Enter a location" onChange={(e)=>{fetchlocs(e.target.value); setinpval(e.target.value)}} value={inpval} onFocus={(e)=>e.target.value = ''}/>
                            </div>
                            {
                                drop === 1 ? 
                                <div className="drops">
                                {
                                    addresses.map((locations, i)=>(
                                        <div className="list">
                                            <p><FontAwesomeIcon icon={faLocationDot}/> </p>
                                            <p onClick={(e)=>{changeaddr(locations); setdrop(0); setinpval(locations.address_components.filter((items)=>items.types[1]==="sublocality" || items.types[0]==="postal_town" || items.types[0]==="locality" || items.types[0]==="administrative_area_level_1")[0].long_name)}}>{locations.formatted_address }</p>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            ''
                            }
                        </div>
                        <div className="lp-inner-three">
                        <p>Radius</p>
                            <div className="kmdisp" onClick={(e)=>setdropkm(!dropkm)}>{radius/1000+' km'} <FontAwesomeIcon icon={faCaretDown}/></div>
                            {
                                dropkm === true ? 
                                    <div className="drops">
                                        <div className='lists' onClick={e=>{setradius(2000); zoomer(2000); setdropkm(!dropkm)}} >2 km</div>
                                        <div className='lists' onClick={e=>{setradius(5000); zoomer(5000); setdropkm(!dropkm)}} >5 km</div>
                                        <div className='lists' onClick={e=>{setradius(10000); zoomer(10000); setdropkm(!dropkm)}} >10 km</div>
                                        <div className='lists' onClick={e=>{setradius(15000); zoomer(15000); setdropkm(!dropkm)}} >15 km</div>
                                        <div className='lists' onClick={e=>{setradius(20000); zoomer(20000); setdropkm(!dropkm)}} >20 km</div>
                                        <div className='lists' onClick={e=>{setradius(50000); zoomer(50000); setdropkm(!dropkm)}} >50 km</div>
                                        <div className='lists' onClick={e=>{setradius(100000); zoomer(100000); setdropkm(!dropkm)}} >100 km</div>
                                        <div className='lists' onClick={e=>{setradius(200000); zoomer(200000); setdropkm(!dropkm)}} >200 km</div>
                                        <div className='lists' onClick={e=>{setradius(300000); zoomer(300000); setdropkm(!dropkm)}} >300 km</div>
                                        <div className='lists' onClick={e=>{setradius(400000); zoomer(400000); setdropkm(!dropkm)}} >400 km</div>
                                        <div className='lists' onClick={e=>{setradius(500000); zoomer(500000); setdropkm(!dropkm)}} >500 km</div>
                                    </div>
                                    :
                                    ''
                            }
                        </div>
                        <div className="maps">
                        {
                            isLoaded ?
                           <GoogleMap zoom={zoom} center={center} mapTypeId={'terrain'} mapContainerStyle={{width:'100%', height:height} }>
                            <CircleF center={center} radius={parseInt(radius)} options={options}/>
                            <MarkerF position={center}/>
                           </GoogleMap>
                            :
                            'Loading'
                        }
                        </div>
                    </div>
                    <div className="lp-inner-four" onClick={(e)=>{{document.body.style.overflow = 'unset';changeloc()} }}>
                        APPLY
                    </div>
                </div>
            </div>
        
    )
}
export default  Map;
        