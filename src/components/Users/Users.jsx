import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { urlParams } from "../../utils/utils";
import api from "../../api";
import Cards from "../sherd/Cards";
import Pagination from "../sherd/Pagination";
import styles from "./Users.module.css"

const Users = () => {
    const { search } = useLocation();
    const params = urlParams(search);
    const { getUsers } = api;
    const [usersList, setUsersList] = useState([]);
    const [totalCount, setTotalCount] = useState()
    const [page, setPage] = useState(1)
    const handlePageChange = e => {setPage(e.target.value)}

    useEffect(()=>{
        if(params?.value){
            getUsers(params?.value,page)
            .then(data => {
                console.log(data)
                setUsersList(data.items)
                setTotalCount(data.total_count)
               
            })
            .catch(e => alert("Users not found"))
        }
    },[params?.value,getUsers,page] )

    return (
        <div>
            <Pagination page= {page} totalCount={totalCount} pageButtons={handlePageChange} />
            <div className={styles.kontainer}>
            <Cards items={usersList} type="users"/>
            </div>
        </div>
    )
}

export default Users