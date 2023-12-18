import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import './PostList.css'
import { deletePost } from '../Js/Actions/actions';
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps=dispatch=>{
return{
    deleteArticle:id=> dispatch(deletePost(id))
}
}
const PostList = (props) => {
    return (
        <div >
            {props.posts.map((post) => <div key={post.id} className=' article' >
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <Button className='btn btn-danger' onClick={()=>props.deleteArticle(post.id)}>Delete</Button>
            </div>)}
        </div>

    )
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)