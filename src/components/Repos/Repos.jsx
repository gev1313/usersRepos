import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import api from "../../api";
import { urlParams } from "../../utils/utils";
import Cards from "../sherd/Cards";
import Pagination from "../sherd/Pagination";
import Search from "../sherd/Search";
import styles from "./Repos.module.css";

const Repos=()=>{
    const { search } = useLocation();
    const params = urlParams(search);
    const { getRepos } = api;
    const [usersList, setUsersList] = useState([]);
    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(1)
    const handlePageChange = e => {
        setPage(e.target.value)
    }

    useEffect(()=>{
        if(params?.value){
            getRepos(params?.value,page)
            .then(data => {
                console.log(data)
                setUsersList(data.items)
                setTotalCount(data.total_count)
            })
            .catch(e => alert("Users not found"))
        }
    },[params?.value,getRepos,page] )
console.log(usersList,456)
    return (
        <div>
            <Pagination page= {page} totalCount={totalCount} pageButtons={handlePageChange} />
            <div className={styles.kontainer}>
            <Cards items={usersList} type="repos"/> 
            </div>
        </div>
    )


}
export default Repos

