import { ADD_ARTICLE, DELETE_ARTICLE } from "../Constants/actions-types"

const initialState={
    posts:[{
        id:1,
        title: 'title 1', 
        content: 'description'
    }]
}

const rootReducer = (state=initialState,action) => {
switch (action.type) {
    case ADD_ARTICLE:
        return{
            posts:[...state.posts,action.payload]
        }
        case DELETE_ARTICLE:
            return{
                posts:state.posts.filter(ele=>action.payload!==ele.id)
            }
    default:
        return state
}  
}
export default rootReducer

