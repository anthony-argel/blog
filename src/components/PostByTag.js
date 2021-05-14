import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Results from './Results';

const ChannelByTag = (props) => {
    const [posts, setPosts] = useState([]);
    const {tagid} = useParams();
    useEffect(() => {
        if(props.apiURL === '') return;
        fetch(props.apiURL+'/tag/'+tagid+'/posts', {
            method: 'GET',
            mode: 'cors'
        })
        .then(res => res.json())
        .then(res => setPosts(res.posts.reverse()))
    }, [props.apiURL, tagid])

    return (
        <Results title={tagid} posts={posts}/>
    )
}

export default ChannelByTag;