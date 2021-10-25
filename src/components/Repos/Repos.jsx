import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { urlParams } from "../../utils/utils";
import Cards from "../sherd/Cards";
import Pagination from "../sherd/Pagination";
import styles from "./Repos.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getReposRequest } from "../../store/action-creaters/reposActionCreator";

const Repos = () => {
    
    const { search } = useLocation();
    const params = urlParams(search);
    const reposData = useSelector(state => state.reposReducer)
    const [page, setPage] = useState(1)
    const handlePageChange = e => {setPage(e.target.value)}
    const dispatch = useDispatch()

    useEffect(() => {
        if(params?.value){
            dispatch(getReposRequest(params?.value,page))
        }
    },[params?.value,page] )
    
    return (
        <div>
            {!reposData.resultsFlag ? (<> <Pagination page= {page} totalCount={reposData.repos.total_count} pageButtons={handlePageChange} />
            <div className={styles.kontainer}>
            <Cards items={reposData.repos.items} type="repos"/>
            </div></>) : 
              <div>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXv2CnDyvkyhiBLXYcreFhuw9QRQk7l7nog&usqp=CAU' />
              </div>
            }
           
        </div>
    )
}

export default Repos




























// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import api from "../../api";
// import { urlParams } from "../../utils/utils";
// import Cards from "../sherd/Cards";
// import Pagination from "../sherd/Pagination";
// import Search from "../sherd/Search";
// import styles from "./Repos.module.css";

// const Repos=()=>{
//     const { search } = useLocation();
//     const params = urlParams(search);
//     const { getRepos } = api;
//     const [usersList, setUsersList] = useState([]);
//     const [totalCount, setTotalCount] = useState(0)
//     const [page, setPage] = useState(1)
//     const handlePageChange = e => {
//         setPage(e.target.value)
//     }

//     useEffect(()=>{
//         if(params?.value){
//             getRepos(params?.value,page)
//             .then(data => {
//                 console.log(data)
//                 setUsersList(data.items)
//                 setTotalCount(data.total_count)
//             })
//             .catch(e => alert("Users not found"))
//         }
//     },[params?.value,getRepos,page] )

//     return (
//         <div>
//             <Pagination page= {page} totalCount={totalCount} pageButtons={handlePageChange} />
//             <div className={styles.kontainer}>
//             <Cards items={usersList} type="repos"/> 
//             </div>
//         </div>
//     )


// }
// export default Repos

