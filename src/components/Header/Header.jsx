import React from "react";
import { Link } from "react-router-dom";
import Search from "../sherd/Search";
import styles from "./Header.module.css";


const Header = () => {
    return (
        <div className={styles.header}>
            <div >
                <img className={styles.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QuIb1xbQ1LS2tZER49g_BD-Xq3GpsTj4zg&usqp=CAU'></img>
            </div>
           <div>
               <Search type ="users"  />

           </div>
                
            <div className={styles.ContainerButtonUsersRepos}>
              <Link to="/users">
                  <button  className ={styles.ButtonUsers} >
                        Users
                  </button>
              </Link>
              <Link to="/repos">
                  <button className ={styles.ButtonRepos}>
                        Repos
                  </button> 
              </Link>
            </div>
        </div>
    )
}

export default Header