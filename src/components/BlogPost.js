import React, { useEffect, useState } from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import '../styles/index.css';
import { DateTime } from 'luxon';
import {MdClose} from 'react-icons/md';

function BlogPost(props) {
	const [post, setPost] = useState();
	const [commentsList, setCommentsList] = useState([]);
	const [message, setMessage] = useState('');
	const {id} = useParams();
	const [token, setToken] = useState('');
	const [deleted, setDeleted] = useState(false);
	const [allTags, setAllTags] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(()=> {
		if(props.apiURL === '') return;
		const tempToken = localStorage.getItem('token');
		if (tempToken !== null) {
			setToken(tempToken);
		}
		let getPostURL = props.apiURL;
		if(props.loggedIn) {
			getPostURL += '/blog/admin/post/'+id;
		} 
		else {
			getPostURL += '/blog/'+id;
		}

		fetch(getPostURL, {
			method: 'GET',
			headers: tempToken !== null ? { 'Content-Type': 'application/json',
				'Authorization' : 'Bearer ' + tempToken } : {},
			mode:'cors'
		})
			.then(res => res.json())
			.then(res => {
				setPost(res);
				if(res.length > 0) {
					setVisible(res[0].visible);
				}
			});

		fetch(props.apiURL+'/blog/'+id+'/comments', {
			method: 'GET'
		})
			.then(res => res.json())
			.then(res => {setCommentsList(res.reverse());});

		fetch(props.apiURL+'/tags', {
			method: 'GET',
			mode: 'cors'
		})
			.then(res => res.json())
			.then(res => setAllTags(res.tags));
	}, [props.apiURL, id, refresh]);

	const loadComments = () => {
		if(props.apiURL === '') return;
		fetch(props.apiURL+'/blog/'+id+'/comments', {
			method: 'GET'
		})
			.then(res => res.json())
			.then(res => {setCommentsList(res.reverse());});
	};

	useEffect(()=> {
	}, [post]);

	function submitForm(e) {
		e.preventDefault();
		if(props.apiURL === '') return;
		fetch(props.apiURL+'/blog/'+id, {
			method: 'POST',
			body: JSON.stringify({comment: message}),
			headers: { 'Content-Type': 'application/json' },
			mode: 'cors'
		})
			.then(res=> {
				if(res.status === 200) {
					loadComments();
				}
			});
	}

	const deletePost = (e) => {
		e.preventDefault();
		if(props.apiURL === '') return;
		fetch(props.apiURL+'/blog/'+id, {
			method: 'DELETE',
			headers: { 'Authorization' : 'Bearer ' + token },
			mode: 'cors'
		})
			.then(res=> {
				if(res.status === 200) {
					setDeleted(true);
				}
			});
	};

	const checkDeleted = () => {
		if(deleted) {
			return <Redirect push to='/'/>;
		}
	};

	const deleteComment = (comment_id) => {
		if(props.apiURL === '' || token === '') return;
		fetch(props.apiURL+'/blog/'+id+'/comment/'+comment_id, {
			method: 'DELETE',
			headers: { 'Authorization' : 'Bearer ' + token},
			mode: 'cors'
		})
			.then(res=> {
				if(res.status === 200) {
					loadComments();
				}
			});
	};

	function addTag(e) {
		e.preventDefault();
		if(props.apiURL === '' || token === '') return;
		let sentId = '';
		let tagname = document.getElementById('tag').value;
		for(let i = 0; i < allTags.length; i++) {
			if(tagname === allTags[i].name) {
				sentId = allTags[i]._id;
				break;
			}
		}
		if(sentId === '') return;
		let sendBody = {tagid: sentId, kappa:'kill me'};
		console.log(sentId);
		fetch(props.apiURL+'/blog/'+id+'/tag', {
			method: 'POST',
			headers: { 'Authorization' : 'Bearer ' + token, 'Content-Type': 'application/json' },
			body: JSON.stringify(sendBody),
			mode:'cors'
		}).then(setRefresh(!refresh));
	}

	function deleteTag(e, tagid) {
		e.preventDefault();
		if(props.apiURL === '' || token === '') return;
		fetch(props.apiURL+'/blog/'+id+'/tag', {
			method: 'DELETE',
			headers: { 'Authorization' : 'Bearer ' + token, 'Content-Type': 'application/json' },
			body: JSON.stringify({tagid: tagid}),
			mode: 'cors'
		}).then(setRefresh(!refresh));
	}

	const toggleVisibility = () => {
		console.log('called');
		if(props.apiURL === '' || token === '' || typeof post === 'undefined') return;
		fetch(props.apiURL+'/blog/visibility/'+id, {
			method: 'PUT',
			headers: { 'Authorization' : 'Bearer ' + token, 'Content-Type': 'application/json' },
			body: JSON.stringify({visible: !post[0].visible}),
			mode: 'cors'
		}).then(res => {
			if(res.status === 200) {
				setVisible(!visible);
			}
		});
	};

	return (
		<div className="container">
			{checkDeleted()}
			<div className='row d-flex justify-content-center '>
				<div className='col-11 col-lg-8'>
					{typeof post === 'undefined' ? 
						<div className='text-center'>
							<div className="spinner-border text-success" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
						: post.map((value) => {
							return <div key={id} className='post'>
								<h1 className='h1' style={{marginBottom: '2vh'}}>{value.title}</h1>
								<h3>Posted {DateTime.fromISO(value.postdate).toFormat('LLL dd, yyyy')}</h3>
								<hr/><p className='message fs-5 lh-base' dangerouslySetInnerHTML={{__html: value.post}}></p>

								{ value.tags.length > 0 ? 
									<div>
										<hr/>
										<p>Tags: 
											{value.tags.map((tagvalues, tagInd) => {
												return <span key={tagvalues._id}>{tagvalues.tagname}
													{token !== '' ? 
														<MdClose onClick={e => deleteTag(e, tagvalues._id)} cursor='pointer' color='red'/>
														:
														null}
                                    
													{tagInd + 1 !== value.tags.length ? ', ' : null}</span>;
											})}
										</p>
									</div>
									:
									null
								}

								<div style={{marginTop: '4vh', display:'flex'}}>
									{token === '' ? null : <p onClick={deletePost} style={{cursor:'pointer', marginRight:'2vw'}}>Delete Post</p>}
									{token === '' ? null : <Link to={`/post/${id}/edit`} style={{textDecoration:'none', marginRight: '2vw', color:'black'}}>Edit Post</Link>}
									{token === '' ? null : <p data-bs-toggle="modal" data-bs-target="#tagModal" style={{cursor:'pointer'}}>Add Tag</p>}
									{token === '' ? null : typeof post !== 'undefined' & visible === true ? <p style={{'marginLeft': '2vw', 'cursor':'pointer'}} onClick={() => toggleVisibility()}>Hide Post</p> 
										: <p style={{'marginLeft': '2vw', 'cursor':'pointer'}} onClick={() => toggleVisibility()}>Show Post</p>}
                            
								</div>
							</div>;
						})}






					<form onSubmit={submitForm}>
						<div className="mb-3">
							<label htmlFor="comment-box" className="form-label"></label>
							<textarea className="form-control" name='comment' required onChange={e => setMessage(e.target.value)} id="comment-box" rows="3"></textarea>
						</div>
						<input type='submit' value='Post Comment'></input>
					</form>
					<div className='commentArea'> 
						<p style={{textAlign:'center', marginTop:'3vh'}}>Comments</p>
						<hr></hr>
						{typeof commentsList === 'undefined' ? 'Loading' : commentsList.map((value) => {
							return <div className="mb-4" key={value._id}>
								<p className='fs-5'>{value.message}</p>
								{token === '' ? null : <button style={{cursor:'pointer'}} value={value._id} onClick={() => {deleteComment(value._id);}}>Delete</button>}         
							</div>;
						})}
					</div>
				</div>
			</div>

            


			<div className="modal fade" id="tagModal" tabIndex="-1" aria-labelledby="tagModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="tagModalLabel">Tag Form</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body" >
							<form onSubmit={e => addTag(e)}>
								<input list='tags'  className='mx-3' name='tag' id='tag'/>
								<datalist id='tags'>
									{allTags.map((value) => {
										return <option key={value._id} data-tag-id={value._id} value={value.name}></option>;
									})}
								</datalist>
								<button className="btn btn-primary" type='submit'>Add Tag</button>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogPost;