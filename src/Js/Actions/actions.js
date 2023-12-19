import { ADD_ARTICLE, ADD_LIKE, DELETE_ARTICLE, REMOVE_LIKE } from "../Constants/actions-types";
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
export const removeLike=id=>{
    return{
        type:REMOVE_LIKE,
        payload:id
    }
    
}