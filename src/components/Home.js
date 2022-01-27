import React, { useEffect, useState } from 'react';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

function Home(props) {
	const [posts, setPosts] = useState([]);
	const [selectedPost, setSelectedPost] = useState(-1);

	useEffect(()=> {
		if(props.apiURL === '' ) return;
		fetch(props.apiURL+'/blog', {
			method: 'GET'
		})
			.then(res => {
				if(res.status === 200) return res.json();
			})
			.then(res => {setPosts(res.reverse());});
	}, [props.apiURL]);

	useEffect(() => {
		if(posts.length > 0) {
			const selectedIndex = Math.floor(Math.random() * posts.length);
			setSelectedPost(selectedIndex);
		}
	}, [posts]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12 col-lg-4 text-center'>
					<img src={profile} className='rounded-circle' style={{width:'auto', maxWidth:'100%', maxHeight:'400px'}} alt='my avatar'></img>
					<h1>Anthony Argel</h1>
					<h5>Interests: Programming, Japanese, Education, Mathematics</h5>
				</div>
				<div className='col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center'>
					<div className='mt-5'>
						<div className='lh-lg'>
							<h3>Random Post</h3>
							{selectedPost !== -1 ?
								<div>
									<Link to={'/blog/'+posts[selectedPost]._id} className='fs-4'>{posts[selectedPost].title}</Link>  
								</div>
								:
								null
							}
						</div>
						<h3 className='mt-5'>Recent Posts</h3>
						<div className=''>
							{selectedPost !== -1 ? 
								<ul className='lh-lg p-0 fs-4' style={{listStyleType:'none'}}>
									<li><Link to={'/blog/'+posts[0]._id}>{posts[0].title}</Link></li>
									<li><Link to={'/blog/'+posts[1]._id}>{posts[1].title}</Link></li>
									<li><Link to={'/blog/'+posts[2]._id}>{posts[2].title}</Link></li></ul>
								:
								<div className="spinner-border text-success" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;