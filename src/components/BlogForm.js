import React, { useEffect, useState } from "react";
import { Redirect, useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import '@tinymce/tinymce-react'
import '../styles/index.css'

function BlogForm(props) {
    const [token, setToken] = useState('');
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);
    const [posted, setPosted] = useState(false);
    const {id} = useParams();
    const [refresh, setRefresh] = useState(false);

    const [blogData, setBlogData] = useState();

    useEffect(()=> {
        if(id) {
            fetch('https://quiet-retreat-88465.herokuapp.com/blog/' + id, {
                method: 'GET',
                mode: 'cors'
            })
            .then(res => {
                if(res.status === 200) {
                    return res.json();
                }    
            })
            .then(res => setBlogData(res))
        }

        const tempToken = localStorage.getItem('token');
        if(tempToken === null) {
            setLoggedIn(false);
        }
        else {
            setToken(tempToken);
        }
    }, []);

    useEffect(() => {
        if(blogData) {
        }
    }, [blogData])

    useEffect(() => {
        if(token !== '') {
        }
    }, [token]);

    function postBlogPost(e) {
        e.preventDefault();
        fetch('https://quiet-retreat-88465.herokuapp.com/blog', {
            method: 'POST',
            body: JSON.stringify({post:post, title:title}),
            headers: { 'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token },
            mode: 'cors'
        })
        .then(res => {
            if(res.status === 401) { // token expired
                localStorage.removeItem('token');
            }
            if(res.status === 200) {
                setPosted(true);
            }    
        })
    }

    const loginCheck = () => {
        if(!loggedIn) 
            return <Redirect push to='/login'/>
    }

    const postCheck = () => {
        if(posted) {
            return <Redirect push to='/blog'/>
        }
    }

    const refreshCheck = () => {
        if(refresh) {
            return <Redirect push to={`/blog/${id}`}/>;
        }
    }

    const updateBlogPost = (e) => {
        e.preventDefault();
        fetch('https://quiet-retreat-88465.herokuapp.com/blog/'+id, {
            method: 'PUT',
            body: JSON.stringify({post:post, title:title}),
            headers: { 'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token },
            mode: 'cors'
        })
        .then(res => {
            if(res.status === 401) { // token expired
                localStorage.removeItem('token');
            }
            if(res.status === 200) {
                if(blogData) {
                    setRefresh(true);
                } else {
                    setPosted(true);
                }
            }    
        })
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col'>
            {loginCheck()}
            {postCheck()}
            {refreshCheck()}
            <h1 className='text-center h1'>Create A Post</h1>
            <form  onSubmit={blogData ? updateBlogPost : postBlogPost}>
                {blogData ? 
                    <div>
                        <label htmlFor='prev-title'>Previous Title:</label><br/>
                        <input type='text' style={{minWidth:"30vw", marginBottom:"3vh"}} value={blogData[0].title} required={true}></input>
                    </div>
                : null}
                    <div>
                    <label htmlFor='title'>Title:</label><br/>
                    <input type='text' style={{minWidth:"30vw", marginBottom:"3vh"}} required={true} onChange={e => setTitle(e.target.value)}></input>
                    </div>
                <Editor apiKey={process.env.TINY_KEY}
                    onEditorChange={(content, editor) => setPost(content)}
                    initialValue={blogData ? blogData[0].post : ""}
                    init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help | image'
                    }}
                />
                <input type='submit' value='submit'></input>
            </form>
                </div>
            </div>
        </div>
    )
}

export default BlogForm;