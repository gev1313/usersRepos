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
      console.log(data,555555);
     
      setSingleRepo(data.owner)
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
     <div className={styles.container}>
        {isLoading ? <p>Loading...</p> : (
        <div className= {styles.cards}>
             <p className={styles.x} onClick={()=>onBack()}>X</p>
            <button className={styles.back} onClick={onBack}>Back</button>
            <img className={styles.img}src={singleRepo.avatar_url} />
           <p className={styles.name}>{singleRepo.login}</p>
        </div>
        )}
     </div>
 )
}
export default SingleRepo


