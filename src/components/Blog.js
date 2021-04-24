import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/reset.css'
import '../styles/index.css'
import {DateTime} from "luxon";

function Blog(props) {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const tempToken = localStorage.getItem('token');
        setToken(tempToken);    

        
        fetch('https://quiet-retreat-88465.herokuapp.com/blog', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {setPosts(res.reverse())});
    }, []);

    useEffect(() => {
        if(token !== '') {
        }
    }, [token]);


    return (
        <div className="content">
            {posts.lengths === 0 ? <div>Loading posts</div> : posts.map((value, index) => {
                
                return <Link to={'/blog/'+value._id} key={value._id}><div className="post">
                    <p className='title'>{value.title}</p>
                    <p>Posted {DateTime.fromISO(value.postdate).toFormat('LLL dd, yyyy')}</p>
                    <hr/>
                    <div className="message" dangerouslySetInnerHTML={{__html: value.post}}/>
                    </div>
                </Link>
                
            })}
        </div>
    )
}

export default Blog;