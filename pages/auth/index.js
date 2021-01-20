import React from "react";
import User from "../../components/User";
import styles from "../../components/styles.module.css";


const authindexPage = (props) => (
    <div>
        <h1 className={styles.title}> This is auth index Page - {props.appName}</h1>
        <User
            name="Mahmoud"
            age={35}
        />
    </div >

);
authindexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: "AUTH PAGE" })
        }, 1000);
    });
    return promise;
}



export default authindexPage