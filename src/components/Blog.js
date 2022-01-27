import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import {DateTime} from 'luxon';

function Blog(props) {
	const [posts, setPosts] = useState([]);
	const [tags, setTags] = useState([]);

	useEffect(()=> {
		if(props.apiURL === '') return;
		fetch(props.apiURL+'/blog', {
			method: 'GET',
			mode:'cors'
		})
			.then(res => res.json())
			.then(res => {setPosts(res.reverse());});

		fetch(props.apiURL+'/tags', {
			method: 'GET',
			mode: 'cors'
		})
			.then(res => res.json())
			.then(res => setTags(res.tags));
	}, [props.apiURL]);


	return (
		<div className="container">
			<div className='row d-flex justify-content-around'>
				<div className='col-12 col-lg-3 my-3'>
					{tags.length > 0 ? 
						<div className='card shadow-lg p-3'>
							<p className='fs-2 text-center'>Tags</p>
							<hr/>
							{tags.map(value => {
								return (
									<Link to={'/tag/'+value._id} key={value._id} className='lh-lg fs-5'>{value.name}</Link>
								);
							})}
						</div>
						: null}
				</div>

				<div className='col-12 col-lg-8'>
					{posts.length > 0 ? posts.map((value) => {
                
						return <div key={value._id} className="card my-3 p-3 shadow-lg">
							<div className='card-body'>
								<h5 className='card-title fs-1'>{value.title}</h5>
								<p>Posted {DateTime.fromISO(value.postdate).toFormat('LLL dd, yyyy')}</p>
								{value.tags.length > 0 ? 
									<div>
										<hr/>
										<p>Tags: 
											{value.tags.map((tagvalues, tagInd) => {
												return <span key={tagvalues._id}>{tagvalues.tagname}{tagInd + 1 !== value.tags.length ? ', ' : null}</span>;
											})}
										</p>
									</div>
									: null}
								<hr/>
								<p className='card-text lh-base fs-5' dangerouslySetInnerHTML={value.post.length > 200 ? {__html: value.post.substr(0,200) + '...'} : {__html: value.post}}></p>
								<Link to={'/blog/'+value._id} key={value._id} className='stretched-link'></Link> 
							</div>
						</div>;
                
					})
						:
                
						<div className="spinner-border text-success" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					}
				</div>
			</div>
            
		</div>
	);
}

export default Blog;