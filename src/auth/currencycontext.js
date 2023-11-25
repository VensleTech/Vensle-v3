import { useState, createContext, useEffect} from "react";

export const CurrencyContext = createContext()


const CurrContext = (props) => {
    const [currency, setcurrency] = useState({
        symbol:''
    })

    //// console.log(currency)
    return(
        <CurrencyContext.Provider value={{currency, setcurrency}}>
            {props.children}
        </CurrencyContext.Provider>
    )
}
export default CurrContext;