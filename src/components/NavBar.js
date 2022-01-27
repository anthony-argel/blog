import {Link, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const NavBar = (props) => {
	const [tagName, setTagName] = useState('');
	const [token, setToken] = useState('');
	const [search, setSearch] = useState('');
	const history = useHistory();

	useEffect(() => {
		if(localStorage.getItem('token') !== '') {
			setToken(localStorage.getItem('token'));
		}
	}, []);

	function sendSearch(e) {
		e.preventDefault();
		if(props.apiURL !== '') {
			history.push('/search/'+search.split(' ').join('_'));
		}
	}

	function createTag() {
		if(props.apiURL === '' || token === '' || tagName === '') return;
		fetch(props.apiURL+'/tag/', {
			method:'POST',
			headers: { 'Authorization' : 'Bearer ' + token, 'Content-Type': 'application/json' },
			body: JSON.stringify({name: tagName}),
			mode:'cors'
		}).then(setTagName(''));
	}

	return (
		<div className='mb-5' style={{backgroundColor:'white'}}>
			<div className='p-4'>
				{props.loggedIn ? 
					<h1 className='text-center'><Link to='/' style={{'color':'pink', 'textDecoration':'none'}}>Anthony Argel</Link><span><Link style={{'color':'green', 'textDecoration':'none'}} to='/blog/create'>+</Link></span></h1>
					:
					<h1 className='text-center'><Link to='/' style={{textDecoration:'none', color:'black'}}>Anthony Argel</Link></h1>
				}
				<h3 className='text-center'>Programming, Japanese, Mathematics</h3>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to='/'>Home</Link>
							</li>
							{props.loggedIn ? <li className='nav-item'><p className='nav-link' data-bs-toggle="modal" data-bs-target="#createTagModal" style={{cursor:'pointer', marginBottom:'0'}}>Add Tag</p></li> : null}
							{props.loggedIn ? <li className='nav-item'><Link to='/blog/create' className='nav-link'>Create</Link></li> : null}
						</ul>
						<div className="modal fade" id="createTagModal" tabIndex="-1" aria-labelledby="createTagModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="createTagModalLabel">Tag Form</h5>
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body" >
										<form>
											{
												tagName === '' ?
													<input type='text' required onChange={e => setTagName(e.target.value)} defaultValue=''></input> :
													<input type='text' required onChange={e => setTagName(e.target.value)}></input>
											}
											<button className="btn btn-primary" type='button' onClick={e => createTag(e)}>Create Tag</button>
										</form>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									</div>
								</div>
							</div>
						</div>
						<form className="d-flex" onSubmit={sendSearch}>
							<div className='input-group'>
								<input className="form-control ms-2" type="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} aria-label="Search"/>
								<button className="btn btn-outline-light" type="submit">Search</button>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;