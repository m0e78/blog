import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteTodo, doneTodo } from '../../Js/Actions/actions';
import './TodoList.css'


/* const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: id => dispatch(deletePost(id)),
        addLike: id => dispatch(addLike(id)),
        removeLike: id => dispatch(removeLike(id))
    }
} */
const TodoList = () => {

    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)


    return (
        <div>
            {todos.map((todo) => (
                <Card key={todo.id} className='col-4 mx-auto'>
                    <Card.Header>
    <Card.Title as='h2' className={todo.isDone?'done':'undone'}>{todo.description}</Card.Title>
  </Card.Header>
                    
                    <Card.Body>
                     
                        <Button style={{marginRight:10}} variant='danger' onClick={() => dispatch(deleteTodo(todo.id))}>     Delete
                        </Button>
                        <Button variant='success' onClick={() => dispatch(doneTodo(todo.id))}>     Done
                        </Button>
                    </Card.Body>
                </Card>))}
        </div>

    );
};
{/* <Button onClick={()=>props.addLike(post.id)}>{post.like}</Button> */ }

// export default connect(mapStateToProps, mapDispatchToProps)(PostList)
export default TodoList