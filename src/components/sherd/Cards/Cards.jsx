import React from "react";
import PropTypes from 'prop-types';
import styles from "./Cards.module.css"
import SingleUser from "../SingleUser";

const Cards = ({items}) => {
    return (
            items.map(item => (
              
              <div onClick= {SingleUser}   className ={styles.cards}>
                 <div >
                    <img src={item.avatar_url||item.owner.avatar_url} alt="User img" className={styles.img}/>
                    <p className={styles.name}>{item.login||item.name}</p>
                 </div>
              </div>
            ))
    )
}
Cards.propTypes = {
    items: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string
    })
}
export default Cards