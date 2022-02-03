import React, { useState } from 'react'
import Link from 'next/link'
const Page404 = (props) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">

                        <img src="/assets/images/error404.svg" className="h-200px mb-4" alt=""/>

                        <h1 className="display-1 text-danger mb-0">404</h1>

                        <h2>Oh no, something went wrong!</h2>

                        <p className="mb-4">Either something went wrong or this page doesn't exist anymore.</p>

                        <Link href="/"><a className="btn btn-primary mb-0">Take me to Homepage</a></Link>
			        </div>
                </div>
            </div>
    </section>
   
    )
};

export default Page404;
