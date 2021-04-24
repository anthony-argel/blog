import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/reset.css'
import '../styles/index.css';

function Home(props) {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(-1);

    useEffect(()=> {
        fetch('https://quiet-retreat-88465.herokuapp.com/blog', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {setPosts(res)});
    }, []);

    useEffect(() => {
        if(posts.length > 0) {
            const selectedIndex = Math.floor(Math.random() * posts.length);
            setSelectedPost(selectedIndex);
        }
    }, [posts])

    return (
        <div className="content flex-row">
         
         <div ><p style={{textAlign:'center',fontSize:"3vw", margin:"2vh 0"}}>Recent Posts</p>
            {selectedPost !== -1 ? 
            
            <ul className='recent-posts'>
                <li><Link to={'/blog/'+posts[0]._id}>{posts[0].title}</Link></li>
                <li><Link to={'/blog/'+posts[1]._id}>{posts[1].title}</Link></li>
                <li><Link to={'/blog/'+posts[2]._id}>{posts[2].title}</Link></li></ul>
            :
                    "loading..."
            }</div>
         
         
            <div>
            <p style={{textAlign:'center',fontSize:"3vw", margin:"2vh 0"}}>Random Post</p>
            <div className='post' style={{textAlign:'flexStart'}}>{selectedPost !== -1 ? <Link to={'/blog/' + posts[selectedPost]._id}><div><p>{posts[selectedPost].title}</p><p dangerouslySetInnerHTML={{__html: posts[selectedPost].post}}></p></div></Link> : <p>"Loading"</p>}</div>
            
            </div>
            
        </div>
    )
}

export default Home;