import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
    useEffect(()=> {
    }, []);

    return (
        <div className="content">
            <p>Loaded home</p>
            <Link to='/login'>Log in</Link>
        </div>
    )
}

export default Home;