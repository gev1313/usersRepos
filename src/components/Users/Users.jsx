import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { urlParams } from "../../utils/utils";
import Cards from "../sherd/Cards";
import Pagination from "../sherd/Pagination";
import styles from "./Users.module.css"
import { getUsersRequest } from "../../store/action-creaters/usersActionsCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useToasts } from 'react-toast-notifications';



const Users = () => {
    
    const { search } = useLocation();
    const params = urlParams(search);
    const usersData = useSelector(state => state.usersReducer)
    const [page, setPage] = useState(1)
    const handlePageChange = e => {setPage(e.target.value)}
    const dispatch = useDispatch()
    const { addToast } = useToasts();

    useEffect(() => {
        if(params?.value){
            dispatch(getUsersRequest(params?.value,page))
        }
    },[params?.value,page] )

    useEffect(()=>{
       if(usersData.error) {
        addToast(usersData.error, { appearance: 'error' });
       }
    },[usersData])
    
    return (
        <div>
            {!usersData.resultsFlag ? (<> <Pagination page= {page} totalCount={usersData.users.total_count} pageButtons={handlePageChange} />
            <div className={styles.kontainer}>
            <Cards items={usersData.users.items} type="users"/>
            </div></>) :  <div>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXv2CnDyvkyhiBLXYcreFhuw9QRQk7l7nog&usqp=CAU' />
              </div>}
        </div>
    )
}

export default Users