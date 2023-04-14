import axios from "axios";
import { useState, useEffect, useRef, useContext, useMemo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faClose, faLocationDot, faNairaSign, faDollarSign, faUser, faBars, faShoppingCart, faShoppingBag, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../auth/usercontext"
import { GoogleMap, useLoadScript, MarkerF, CircleF } from "@react-google-maps/api";
import { useGeoLocation } from "use-geo-location";

const Map  = ({getref, getrad, rad, height}) => {
    // google boiler
    const {isLoaded} =useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_GMAP
    })


    // destructure context
        const {details, details:{userlocation}, setDetails} = useContext(UserContext)
        


    // states
    const [drop, setdrop] = useState(0)
    const [radius, setradius] = useState(3000)
    const [zoom, setzoom] = useState(11)
    const [newadd, setnewadd] = useState(userlocation)
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
			const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+val+'&key=AIzaSyDpLFDonki5cq8ESXkTqcfgQMJK2Zf8GqA');
            console.log(response.data.results);
            console.log(response.data.results[0].address_components.filter(items=>items.types[0] === 'country')[0].long_name);
            
            setaddresses(response.data.results);
            
            setdrop(1)
            
		} catch (err) {
            console.log(err)
		}
    }

    // 2. Change Address function
    const changeaddr =async (val)=>{
       
        console.log(val)
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
       setradius(3000)
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
            case 3000:
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
            case 25000:
                setzoom(7.5)
                return;
            default:
                break;
        }
    }
    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.4,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.15,
    }
    return(
        <div className="location-pop">
                <div className="lp-inner">
                    <div className="lp-inner-one">
                        <p>Change location </p>
                        <div onClick={getref}><FontAwesomeIcon icon={faClose} /></div>
                    </div>
                    <div className="scroll-inner">
                        <div className="lp-curr">Search by town, city, neighbourhood or postal code.</div>
                        <div className="lp-inner-two">
                            <div><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div>
                                <p>Location</p>
                                <input type='text' placeholder="Enter a location" onChange={(e)=>fetchlocs(e.target.value)}/>
                            </div>
                            {
                                drop === 1 ? 
                                <div className="drops">
                                {
                                    addresses.map((locations, i)=>(
                                        <div className="list">
                                            <p><FontAwesomeIcon icon={faLocationDot}/> </p>
                                            <p onClick={(e)=>{changeaddr(locations); setdrop(0);}}>{locations.formatted_address }</p>
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
                        <select onChange={e=>{setradius(e.target.value); zoomer(e.target.value)}}>
                                <option value='3000'>3 km</option>
                                <option value='5000'>5 km</option>
                                <option value='10000'>10 km</option>
                                <option value='15000'>15 km</option>
                                <option value='20000'>20 km</option>
                            </select>
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
                    <div className="lp-inner-four" onClick={(e)=>{changeloc() }}>
                        APPLY
                    </div>
                </div>
            </div>
        
    )
}
export default  Map;
        