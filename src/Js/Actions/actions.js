import { ADD_ARTICLE, ADD_LIKE, DELETE_ARTICLE, ADD_DISLIKE, ADD_TODO, DELETE_TODO } from "../Constants/actions-types";
export const addPost = newPost => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}
export const deletePost=id=>{
    return{
        type:DELETE_ARTICLE,
        payload:id
    }
}
export const addLike=id=>{
    return{
        type:ADD_LIKE,
        payload:id
    }
    
}
export const addDislike=id=>{
    return{
        type:ADD_DISLIKE,
        payload:id
    }
    
}
export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}
export const deleteTodo=id=>{
    return{
        type:DELETE_TODO,
        payload:id
    }
}