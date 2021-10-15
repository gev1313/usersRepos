import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./Search.module.css"
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import { urlParams } from "../../../utils/utils";

const Search = ({type, className}) => {
    const { search } = useLocation();
    const params = urlParams(search)
    const [inputValue, setInputValue] = useState(params.value || "")

    return (
        <div className={cn(styles.ContainerInput,className)}>
            <input className={styles.input} value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <Link to={type ==="users" ? `/users?value=${inputValue}` : `/users?value=${inputValue}`}>
                <button className={styles.buttonSearch}>Users</button>  
            </Link>
            <Link to={type ==="repos" ? `/repos?value=${inputValue}` : `/repos?value=${inputValue}`}>
                <button className={styles.buttonSearch}>Repos</button>
            </Link>
        </div>
    )
}

Search.propTypes = {
   type : PropTypes.string.isRequired,
   className: PropTypes.string
} 

Search.defaultProps = {
    className : ""
}

export default Search