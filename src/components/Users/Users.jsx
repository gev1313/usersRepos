import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { urlParams } from "../../utils/utils";
import Cards from "../sherd/Cards";
import Pagination from "../sherd/Pagination";
import styles from "./Users.module.css"
import { getUsersRequest } from "../../store/action-creaters/usersActionsCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Users = () => {
    
    const { search } = useLocation();
    const params = urlParams(search);
    const usersData = useSelector(state => state.usersReducer)
    const [page, setPage] = useState(1)
    const handlePageChange = e => {setPage(e.target.value)}
    const dispatch = useDispatch()

    useEffect(() => {
        if(params?.value){
            dispatch(getUsersRequest(params?.value,page))
        }
    },[params?.value,page] )
    
    return (
        <div>
            {!usersData.resultsFlag ? (<> <Pagination page= {page} totalCount={usersData.users.total_count} pageButtons={handlePageChange} />
            <div className={styles.kontainer}>
            <Cards items={usersData.users.items} type="users"/>
            </div></>) : <p>Loading...</p>}
           
        </div>
    )
}

export default Users