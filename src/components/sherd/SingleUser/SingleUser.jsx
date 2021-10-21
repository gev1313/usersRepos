import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router"
import api from "../../../api"
import { getSinglUsersRequest } from "../../../store/action-creaters/usersActionsCreator"
import styles from "./SingleUser.module.css"

const SingleUser=()=>{
    const [ singleUser, setSingleUser] = useState({})
    const [ isLoading, setIsLoading] = useState(false)
    const { getSingleUserApi } = api
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.usersReducer)

useEffect( ()=> {
    dispatch(getSinglUsersRequest(id))
},[])

const onBack = () => {
    history.goBack()
}

    console.log(singleUser);
 return (
     <div className={styles.container}>
        {!usersData.resultsFlag ? 
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXv2CnDyvkyhiBLXYcreFhuw9QRQk7l7nog&usqp=CAU' />
        </div> : (
        <div className= {styles.cards}>
            <p className={styles.x} onClick={()=>onBack()}>X</p>
            <button className={styles.back} onClick={onBack}>Back</button>
            <img className={styles.img} src={usersData.singleUser.avatar_url} />
            <p className={styles.name}>{usersData.singleUser.login}</p>
        </div>
        )}
     </div>
 )
}
export default SingleUser


