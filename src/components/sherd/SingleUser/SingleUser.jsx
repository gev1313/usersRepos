import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import api from "../../../api"
import styles from "./SingleUser.module.css"

const SingleUser=()=>{
    const [ singleUser, setSingleUser] = useState({})
    const [ isLoading, setIsLoading] = useState(false)
    const { getSingleUserApi } = api
    const { id } = useParams()
    const history = useHistory()

useEffect( async ()=> {
    setIsLoading(true)
    try{
      const data = await getSingleUserApi(id)
      setSingleUser(data)
      setIsLoading(false)
    }catch(err){
        setIsLoading(false)
        console.log(err);
    }

    // getSingleUserApi(id).then(data => {
    //     console.log(data)
    // }).catch(error => console.log(error))

},[])

const onBack = () => {
    history.goBack()
}

    console.log(singleUser);
 return (
     <div>
        {isLoading ? <p>Loading...</p> : (
        <div>
            <button onClick={onBack}>Back</button>
            <p>{singleUser.login}</p>
            <img src={singleUser.avatar_url} />
        </div>
        )}
     </div>
 )
}
export default SingleUser


