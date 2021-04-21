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

    const [blogData, setBlogData] = useState();

    useEffect(()=> {
        if(id) {
            fetch('http://localhost:6969/blog/' + id, {
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
            console.log(blogData)
        }
    }, [blogData])

    useEffect(() => {
        if(token !== '') {
        }
    }, [token]);

    function postBlogPost(e) {
        e.preventDefault();
        fetch('http://localhost:6969/blog', {
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

    const updateBlogPost = (e) => {
        e.preventDefault();
        fetch('http://localhost:6969/blog/'+id, {
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
                    window.location.reload();
                } else {
                    setPosted(true);
                }
            }    
        })
    }

    return (
        <div className="content">
            {loginCheck()}
            {postCheck()}
            <h1>Create A Post</h1>
            <form className="flex-column" onSubmit={blogData ? updateBlogPost : postBlogPost}>
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
                    initialValue={blogData ? blogData[0].post : "loading"}
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
    )
}

export default BlogForm;