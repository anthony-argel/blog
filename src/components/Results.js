import {Link} from 'react-router-dom';
import {DateTime} from 'luxon';
const Results = (props) => {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>

                <div className='col-12 col-lg-8'>
                    <h1>Results: {props.posts.length}</h1>
                {props.posts.length > 0 ? props.posts.map((value, index) => {
                
                return <div key={value._id} className="card my-3 p-3 shadow-lg">
                        <div className='card-body'>
                            <h5 className='card-title fs-1'>{value.title}</h5>
                             <p>Posted {DateTime.fromISO(value.postdate).toFormat('LLL dd, yyyy')}</p>
                             {value.tags.length > 0 ? 
                            <div>
                            <hr/>
                            <p>Tags: 
                            {value.tags.map((tagvalues, tagInd) => {
                                return <span>{tagvalues.tagname}{tagInd + 1 !== value.tags.length ? ', ' : null}</span>
                            })}
                            </p>
                        </div>
                            : null}
                             <hr/>
                            <p className='card-text lh-base fs-5' dangerouslySetInnerHTML={value.post.length > 200 ? {__html: value.post.substr(0,200) + '...'} : {__html: value.post}}></p>
                            <Link to={'/blog/'+value._id} key={value._id} className='stretched-link'></Link> 
                        </div>
                    </div>
                
            })
                :
                <p>No results</p>
                }
                </div> 
            </div>
        </div>
    )
}

export default Results;