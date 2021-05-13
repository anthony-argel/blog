import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="container">
            <div className='row d-flex justify-content-center '>
                <div className='col-12 col-md-8'>
                {posts.lengths === 0 ? 
                <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                : posts.map((value, index) => {
                
                return <div key={value._id} className="card my-3 p-3 shadow-lg">
                        <div className='card-body'>
                            <h5 className='card-title fs-1'>{value.title}</h5>
                             <p>Posted {DateTime.fromISO(value.postdate).toFormat('LLL dd, yyyy')}</p>
                             <hr/>
                            <p className='card-text lh-base fs-5' dangerouslySetInnerHTML={value.post.length > 700 ? {__html: value.post.substr(0,700) + '... <br/>(See more)'} : {__html: value.post}}></p>
                            <Link to={'/blog/'+value._id} key={value._id} className='stretched-link'></Link> 
                        </div>
                    </div>
                
            })}
                </div>
            </div>
            
        </div>
    )
}

export default Blog;