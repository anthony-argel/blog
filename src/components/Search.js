import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Results from './Results';

const Search = (props) => {
    
	const [posts, setPosts] = useState([]);
	let {searchstring} = useParams();

	useEffect(() => {
		if(props.apiURL !== '' && searchstring !== '') {
			let query = searchstring.split('_').join(' ');
			fetch(props.apiURL+'/search?query='+query, {
				method:'GET',
				mode:'cors'
			})
				.then(res => res.json())
				.then(res => {
					setPosts(res.results);
				});
		}
	}, [props.apiURL, searchstring]);

	return (
		<Results title={'Search: '+ searchstring.split('_').join(' ')} posts={posts}/>
	);
};

export default Search;