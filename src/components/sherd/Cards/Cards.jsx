import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import styles from "./Cards.module.css"

const Cards = ({items, type}) => {
    return (
            items.map(item => (
              <Link to={`${type}/${type === "users" ? item.id : item.full_name }`} className ={styles.cards}>
                 <div >
                    <img src={item.avatar_url||item.owner.avatar_url} alt="User img" className={styles.img}/>
                    <p className={styles.name}>{item.login||item.name}</p>
                 </div>
              </Link>
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