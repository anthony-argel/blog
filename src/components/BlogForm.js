import React, { useEffect, useState } from 'react';
import { Redirect, useParams, Prompt } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import '@tinymce/tinymce-react';
import '../styles/index.css';

function BlogForm(props) {
	const [token, setToken] = useState('');
	const [post, setPost] = useState('');
	const [title, setTitle] = useState('');
	const [visible, setVisible] = useState(false);
	const [loggedIn, setLoggedIn] = useState(true);
	const [posted, setPosted] = useState(false);
	const {id} = useParams();
	const [refresh, setRefresh] = useState(false);

	const [blogData, setBlogData] = useState();

	useEffect(()=> {
		if(props.apiURL === '') return;
		if(id) {
			let getURL = props.apiURL;
			const tempToken = localStorage.getItem('token');
			if(props.loggedIn) {
				getURL += '/blog/admin/post/'+id;
			}
			else {
				getURL += '/blog/'+id;
			}
			fetch(getURL, {
				method: 'GET',
				headers: tempToken !== null ? { 'Content-Type': 'application/json',
					'Authorization' : 'Bearer ' + tempToken } : {},
				mode:'cors'
			})
				.then(res => {
					if(res.status === 200) {
						return res.json();
					}    
				})
				.then(res => {
					let newData = res[0];
					setBlogData(res);
					setTitle(newData.title);
					setPost(newData.post);
					setVisible(newData.visible);
				});
		}

		const tempToken = localStorage.getItem('token');
		if(tempToken === null) {
			setLoggedIn(false);
		}
		else {
			setToken(tempToken);
		}
	}, [id, props.apiURL]);

	useEffect(() => {
		if(blogData && blogData.length > 0) {
			setPost(blogData[0].post);
		}
	}, [blogData]);

	function postBlogPost(e) {
		e.preventDefault();
		if(props.apiURL === '') return;
		fetch(props.apiURL+'/blog', {
			method: 'POST',
			body: JSON.stringify({post:post, title:title}),
			headers: { 'Content-Type': 'application/json',
				'Authorization' : 'Bearer ' + token },
			mode: 'cors'
		})
			.then(res => {
				if(res.status === 401) { 
					localStorage.removeItem('token');
				}
				if(res.status === 200) {
					setPosted(true);
				}    
			});
	}

	const loginCheck = () => {
		if(!loggedIn) 
			return <Redirect push to='/login'/>;
	};

	const postCheck = () => {
		if(posted) {
			return <Redirect push to='/'/>;
		}
	};

	const refreshCheck = () => {
		if(refresh) {
			return <Redirect push to={`/post/${id}`}/>;
		}
	};

	const updateBlogPost = (e) => {
		e.preventDefault();
		if(props.apiURL === '') return;
		fetch(props.apiURL+'/blog/'+id, {
			method: 'PUT',
			body: JSON.stringify({post:post, title:title, visible:visible}),
			headers: { 'Content-Type': 'application/json',
				'Authorization' : 'Bearer ' + token },
			mode: 'cors'
		})
			.then(res => {
				if(res.status === 401) { 
					localStorage.removeItem('token');
				}
				if(res.status === 200) {
					if(blogData) {
						setRefresh(true);
					} else {
						setPosted(true);
					}
				}    
			});
	};

	return (
		<div className="container mb-3">
			<Prompt message='Are you done with this form?'></Prompt>
			<div className='row'>
				<div className='col'>
					{loginCheck()}
					{postCheck()}
					{refreshCheck()}
					<h1 className='text-center h1'>{blogData ? 'Update Post' : 'Create Post'}</h1>
            
					<form onSubmit={blogData ? updateBlogPost : postBlogPost}>
						<div>
							<label htmlFor='title'>Title:</label><br/>
							<input type='text' style={{minWidth:'30vw', marginBottom:'3vh'}} value={title} required={true} onChange={e => setTitle(e.target.value)}></input>
						</div>
						<Editor 
							onEditorChange={(content) => setPost(content)}
							initialValue={blogData ? blogData[0].post : ''}
							init={{
								height: 500,
								menubar: 'insert',
								plugins: [
									'advlist autolink lists link image charmap print preview anchor',
									'searchreplace visualblocks code fullscreen',
									'insertdatetime media table paste code help wordcount media'
								],
								toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \
                                    alignleft aligncenter alignright alignjustify | \
                                    bullist numlist outdent indent | removeformat | help | image | media | link'
							}}
						/>
						<input type='submit' value='submit'></input>
					</form>
				</div>
			</div>
		</div>
	);
}

export default BlogForm;