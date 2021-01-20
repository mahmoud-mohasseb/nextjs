import React from "react";
import Link from 'next/link';
// import Router from 'next/router';


const Error = () => (
    <div>
        <h1>Ooops Something Went Wrong</h1>

        <p>Try Again
        <Link href="/"><a>going Back</a></Link>
        </p>
        {/* 
        <button
            onClick={Router.push('/auth')}>
            Go back
            </button> */}
    </div >
);

export default Error