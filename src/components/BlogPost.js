import React, { useEffect, useState } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import '../styles/reset.css';
import '../styles/index.css';
import { DateTime } from "luxon";

function BlogPost(props) {
    const [post, setPost] = useState();
    const [commentsList, setCommentsList] = useState([]);
    const [message, setMessage] = useState("");
    const {id} = useParams();
    const [token, setToken] = useState('');
    const [deleted, setDeleted] = useState(false);

    useEffect(()=> {
        const tempToken = localStorage.getItem('token');
        if (tempToken !== null) {
            setToken(tempToken);
        }

        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {setPost(res)});

        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id+'/comments', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {setCommentsList(res)});
    }, []);

    useEffect(()=> {
    }, [post]);

    function submitForm(e) {
        e.preventDefault();
        console.log(message);
        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id, {
            method: 'POST',
            body: JSON.stringify({comment: message}),
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors'
        })
        .then(res=> {
            if(res.status === 200) {
                window.location.reload();
            }
        })
    }

    const deletePost = (e) => {
        e.preventDefault();
        console.log(message);
        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id, {
            method: 'DELETE',
            headers: { 'Authorization' : 'Bearer ' + token },
            mode: 'cors'
        })
        .then(res=> {
            if(res.status === 200) {
                setDeleted(true);
            }
        })
    }

    const checkDeleted = () => {
        if(deleted) {
            return <Redirect push to='/blog'/>
        }
    }

    const deleteComment = (comment_id) => {
        console.log(message);
        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id+"/comment/"+comment_id, {
            method: 'DELETE',
            headers: { 'Authorization' : 'Bearer ' + token },
            mode: 'cors'
        })
        .then(res=> {
            if(res.status === 200) {
                window.location.reload();
            }
        })
    }

    return (
        <div className="content">
            {checkDeleted()}
           {typeof post === 'undefined' ? "Loading" : post.map((value) => {
               return <div key={id} className='post'>
                   <h1 style={{marginBottom: "2vh"}}>{value.title}</h1>
                   <h2>Posted {DateTime.fromISO(value.postdate).toFormat('LLL dd, yyyy')}</h2>
               <hr/><p className='message' dangerouslySetInnerHTML={{__html: value.post}}></p>
               <div className='flex-row' style={{marginTop: "4vh"}}>
                   {token === '' ? null : <p onClick={deletePost} style={{cursor:"pointer", marginRight:"2vw"}}>Delete Post</p>}
               {token === '' ? null : <Link to={`/blog/${id}/edit`}>Edit Post</Link>}</div></div>
           })}
           <form onSubmit={submitForm}>
               <textarea name='comment' id="comment-box" required onChange={e => setMessage(e.target.value)}></textarea><br/>
               <input type='submit' value='Post Comment'></input>
           </form>
           <div className='commentArea'>
            <p style={{textAlign:"center", marginTop:"3vh"}}>Comments</p>
            <hr></hr>
            {typeof commentsList === 'undefined' ? "Loading" : commentsList.map((value) => {
                return <div className="comment" key={value._id}>
                    <p>{value.message}</p>
                    {token === '' ? null : <button style={{cursor:"pointer"}} value={value._id} onClick={() => {deleteComment(value._id)}}>Delete</button>}         
                </div>
            })}
           </div>
           
        </div>
    )
}

export default BlogPost;