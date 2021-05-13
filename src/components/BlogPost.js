import React, { useEffect, useState } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
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

        loadComments();
    }, []);

    const loadComments = () => {
        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id+'/comments', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {setCommentsList(res.reverse())});
    }

    useEffect(()=> {
    }, [post]);

    function submitForm(e) {
        e.preventDefault();
        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id, {
            method: 'POST',
            body: JSON.stringify({comment: message}),
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors'
        })
        .then(res=> {
            if(res.status === 200) {
                loadComments();
            }
        })
    }

    const deletePost = (e) => {
        e.preventDefault();
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
        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id+"/comment/"+comment_id, {
            method: 'DELETE',
            headers: { 'Authorization' : 'Bearer ' + token },
            mode: 'cors'
        })
        .then(res=> {
            if(res.status === 200) {
                loadComments();
            }
        })
    }

    return (
        <div className="container">
            {checkDeleted()}
            <div className='row d-flex justify-content-center '>
                <div className='col-11 col-lg-8'>
                        {typeof post === 'undefined' ? 
                    <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    : post.map((value) => {
                    return <div key={id} className='post'>
                        <h1 className='h1' style={{marginBottom: "2vh"}}>{value.title}</h1>
                        <h3>Posted {DateTime.fromISO(value.postdate).toFormat('LLL dd, yyyy')}</h3>
                    <hr/><p className='message fs-5 lh-base' dangerouslySetInnerHTML={{__html: value.post}}></p>
                    <div style={{marginTop: "4vh", display:'flex'}}>
                        {token === '' ? null : <p onClick={deletePost} style={{cursor:"pointer", marginRight:"2vw"}}>Delete Post</p>}
                    {token === '' ? null : <Link to={`/blog/${id}/edit`} style={{textDecoration:'none', color:'black'}}>Edit Post</Link>}</div></div>
                })}
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="comment-box" className="form-label"></label>
                        <textarea className="form-control" name='comment' required onChange={e => setMessage(e.target.value)} id="comment-box" rows="3"></textarea>
                    </div>
                    <input type='submit' value='Post Comment'></input>
                </form>
                <div className='commentArea'> 
                    <p style={{textAlign:"center", marginTop:"3vh"}}>Comments</p>
                    <hr></hr>
                    {typeof commentsList === 'undefined' ? "Loading" : commentsList.map((value) => {
                        return <div className="mb-4" key={value._id}>
                            <p className='fs-5'>{value.message}</p>
                            {token === '' ? null : <button style={{cursor:"pointer"}} value={value._id} onClick={() => {deleteComment(value._id)}}>Delete</button>}         
                        </div>
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;