import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Header from "./Header";
function Landing(){
    return(
        <div>
            <Header/>
            <h1 className="title">Home Page</h1>
            <Link to="/second">
                <img height={200} src={"https://cyberassets.s3.amazonaws.com/static/general/img/logo.png"}/>
            </Link>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sidebar</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                Some text as placeholder. Hello world!.
                </div>
            </div>
            </div>
        </div>
    )
}
export default Landing;