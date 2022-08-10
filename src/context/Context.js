import { createContext, useState, useEffect } from "react"
import axios from "axios"

const ContextProvider = createContext()

const Context = ({ children }) => {
    
    const [data, setData] = useState([])

    const callData = async () => {
      const res = await axios.get('http://himms.s3-website-us-east-1.amazonaws.com/data.json')
      setData(res.data)
    }
  
    useEffect(() => {
      callData()
    }, [])

    return (
        <ContextProvider.Provider value={{data}}>
            {children}
        </ContextProvider.Provider>
    )

}

export {ContextProvider}
export default Context