import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";


class indexPage extends Component {
    // fast reload
    static getInitialProps(context) {

        console.log(context);

        // creating variable with promise ;

        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve({ appName: "Super APP" })
            }, 1000);
        });
        return promise;
    }
    render() {

        return (
            <div>
                <h1>This is Main Page {this.props.appName}</h1>
                <p>GO to <Link href="./auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}> Go AuthPage</button>
            </div>
        )
    }

}

export default indexPage;