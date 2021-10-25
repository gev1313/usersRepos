import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router"
import { getSinglReposRequest } from "../../../store/action-creaters/reposActionCreator"
import styles from "./SingleRepo.module.css"

const SingleRepo=()=>{
   
    const history = useHistory()
    const dispatch = useDispatch()
    const reposData = useSelector(state => state.reposReducer)
    const id = history.location.pathname.split("repos")[1]

useEffect( ()=> {
    dispatch(getSinglReposRequest(id))
},[])

const onBack = () => {
    history.goBack()
}
    
 return (
     <div className={styles.container}>
        {!reposData.resultsFlag ? 
        (<div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXv2CnDyvkyhiBLXYcreFhuw9QRQk7l7nog&usqp=CAU' />
        </div>) : (
        <div className= {styles.cards}>
            <button className={styles.back} onClick={onBack}>Back</button>
            <img className={styles.img} src={reposData.singleRepo?.owner?.avatar_url} />
            <p className={styles.name}>{reposData.singleRepo?.name}</p>
        </div>
        )}
     </div>
 )
}
export default SingleRepo


