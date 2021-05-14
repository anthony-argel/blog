import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {DateTime} from "luxon";

function Home(props) {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(-1);

    useEffect(()=> {
        if(props.apiURL === '' ) return;
        fetch(props.apiURL+'/blog', {
            method: 'GET'
        })
        .then(res => {
            console.log(res);
            if(res.status === 200) return res.json();
        })
        .then(res => {setPosts(res.reverse())});
    }, [props.apiURL]);

    useEffect(() => {
        if(posts.length > 0) {
            const selectedIndex = Math.floor(Math.random() * posts.length);
            setSelectedPost(selectedIndex);
        }
    }, [posts])

    return (
            <div className='container'>
                <div className='row d-flex justify-content-evenly mb-3 '>
                    <div className='col-12 col-lg-6'>

                    <h2 className='h2 text-center'>Random Post</h2>

                <div >{selectedPost !== -1 ?
                <div className="card shadow-lg p-2"> 
                    <div className="card-body">
                        <h5 className="card-title fs-2">{posts[selectedPost].title}</h5>
                            <p>Posted {DateTime.fromISO(posts[selectedPost].postdate).toFormat('LLL dd, yyyy')}</p>
                            <hr/>
                        <p className="card-text fs-5 lh-base" dangerouslySetInnerHTML={{__html: posts[selectedPost].post}}></p>
                        {posts[selectedPost].tags.length > 0 ? 
                        <div>
                            <hr/>
                            <p>Tags: 
                            {posts[selectedPost].tags.map((value, index) => {
                                return <span key={value._id}>{value.tagname}{index + 1 !== posts[selectedPost].tags.length ? ',' : null}</span>
                            })}
                            </p>
                        </div>
                            : null}
                        <Link to={'/blog/' + posts[selectedPost]._id} className='stretched-link'></Link>
                    </div>
                    </div> : 
                    <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>}
                    </div>
                    </div>




                    <div className='col-12 col-lg-3 '>
                    <div className=''><p className='fs-2'>Recent Posts</p>
                        {selectedPost !== -1 ? 
                        <ul className='recent-posts lh-lg shadow-lg p-5' style={{listStyleType:'none'}}>
                            <li><Link to={'/blog/'+posts[0]._id}>{posts[0].title}</Link></li>
                            <hr/>
                            <li><Link to={'/blog/'+posts[1]._id}>{posts[1].title}</Link></li>
                            <hr/>
                            <li><Link to={'/blog/'+posts[2]._id}>{posts[2].title}</Link></li></ul>
                        :
                        <div className="spinner-border text-success" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        }</div>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            
            </div>


            
    )
}

export default Home;