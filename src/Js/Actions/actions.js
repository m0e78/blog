import { ADD_ARTICLE, DELETE_ARTICLE } from "../Constants/actions-types";
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