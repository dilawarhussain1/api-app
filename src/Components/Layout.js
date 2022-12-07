
import React from "react";
import { Link } from "react-router-dom";

const Layout = () =>{
    return(

        <div>
            <nav> 
            <li>
                <Link to="/Read"></Link>
                <button>Read</button>
                <Link to="/Update"></Link>
                <button>Update</button>
            </li>
            </nav>
        </div>
    )
}

export default Layout;