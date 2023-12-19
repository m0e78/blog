import { ADD_ARTICLE, ADD_LIKE, DELETE_ARTICLE, REMOVE_LIKE } from "../Constants/actions-types"

const initialState = {
    posts: [{
        id: 1,
        title: 'title 1',
        content: 'description',
        like: 0
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
            case REMOVE_LIKE:
    return {
        ...state,
        posts: state.posts.map((post) =>
            post.id === action.payload
                ? { ...post, like: post.like - 1 }
                : post
        )
    };
        default:
            return state
    }
}
export default rootReducer

