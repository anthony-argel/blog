import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {DateTime} from "luxon";

function Home(props) {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(-1);

    useEffect(()=> {
        fetch('https://quiet-retreat-88465.herokuapp.com/blog', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {setPosts(res.reverse())});
    }, []);

    useEffect(() => {
        if(posts.length > 0) {
            const selectedIndex = Math.floor(Math.random() * posts.length);
            setSelectedPost(selectedIndex);
        }
    }, [posts])

    return (
            <div className='container'>
                <div className='row d-flex justify-content-evenly'>
                    <div className='col-12 col-md-6'>

                    <h2 className='h2 text-center'>Random Post</h2>

                <div >{selectedPost !== -1 ?
                <div className="card"> 
                    <div className="card-body">
                        <h5 className="card-title fs-2">{posts[selectedPost].title}</h5>
                            <p>Posted {DateTime.fromISO(posts[selectedPost].postdate).toFormat('LLL dd, yyyy')}</p>
                            <hr/>
                        <p className="card-text fs-5 lh-base" dangerouslySetInnerHTML={{__html: posts[selectedPost].post}}></p>
                        <Link to={'/blog/' + posts[selectedPost]._id} className='stretched-link'></Link>
                    </div>
                    </div> : 
                    <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>}
                    </div>
                    </div>




                    <div className='col-12 col-md-3'>
                    <div ><p className='fs-2'>Recent Posts</p>
                            <hr/>
                        {selectedPost !== -1 ? 
                        
                        <ul className='recent-posts lh-lg'>
                            <li><Link to={'/blog/'+posts[0]._id}>{posts[0].title}</Link></li>
                            <hr/>
                            <li><Link to={'/blog/'+posts[1]._id}>{posts[1].title}</Link></li>
                            <hr/>
                            <li><Link to={'/blog/'+posts[2]._id}>{posts[2].title}</Link></li></ul>
                        :
                        <div class="spinner-border text-success" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        }</div>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            
            </div>


            
    )
}

export default Home;