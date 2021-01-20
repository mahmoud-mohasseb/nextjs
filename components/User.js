import React from "react";
import styles from "./styles.module.css";

const user = (props) => (
    <div className={styles.mahmoud} >
        <h1 className={styles.name}> {props.name}</h1>
        <p style={
            { color: '#23689b' }
        }>Age :{props.age} Years</p>
    </div>
);
export default user;