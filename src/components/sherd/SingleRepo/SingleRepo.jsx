import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import api from "../../../api"
import styles from "./SingleRepo.module.css"

const SingleRepo=()=>{
    const [ singleRepo, setSingleRepo] = useState({})
    const [ isLoading, setIsLoading] = useState(false)
    const { getSingleRepoApi } = api
    const params = useParams()
    const history = useHistory()
useEffect( async ()=> {
    setIsLoading(true)
    try{
      const data = await getSingleRepoApi(history.location.pathname.slice(7))
      console.log(data,55555555555555);
      setSingleRepo(data)
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
 return (
     <div>
        {isLoading ? <p>Loading...</p> : (
        <div>
            <button onClick={onBack}>Back</button>
            <p>{singleRepo.name}</p>
            {/* <img src={singleRepo.avatar_url} /> */}
        </div>
        )}
     </div>
 )
}
export default SingleRepo


