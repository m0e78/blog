import { ADD_ARTICLE, ADD_DISLIKE, ADD_LIKE, DELETE_ARTICLE } from "../Constants/actions-types"

const initialState = {
    posts: [{
        id: 1,
        title: 'title 1',
        content: 'description',
        like: 0,
        dislike:0
    }]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                posts: [...state.posts, action.payload]
            }
        case DELETE_ARTICLE:
            return {
                posts: state.posts.filter(ele => action.payload !== ele.id)
            }
        case ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload
                        ? { ...post, like: post.like + 1 }
                        : post
                )
            };
            case ADD_DISLIKE:
    return {
        ...state,
        posts: state.posts.map((post) =>
            post.id === action.payload
                ? { ...post, dislike: post.dislike + 1 }
                : post
        )
    };
        default:
            return state
    }
}
export default rootReducer

