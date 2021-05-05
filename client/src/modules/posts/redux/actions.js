import { PostServices } from './services';
import { PostConstants } from './constants';


export const PostActions = {
    createPost,
    getNewFeed,
    setComment,
}

function createPost(data) {
    return dispatch => {
        dispatch({ type: PostConstants.CREATE_POST_REQUEST });
        PostServices.createPost(data)
            .then(res => {
                dispatch({
                    type: PostConstants.CREATE_POST_SUCCESS,
                    payload: res.data.content,
                });
            })
            .catch((err) => {
                dispatch({
                    type: PostConstants.CREATE_POST_FAILE
                })
            })
    }
}

function getNewFeed() {
    return dispatch => {
        dispatch({ type: PostConstants.GET_NEW_FEED_REQUEST });
        PostServices.getNewFeed()
            .then(res => {
                dispatch({
                    type: PostConstants.GET_NEW_FEED_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch((err) => {
                dispatch({
                    type: PostConstants.GET_NEW_FEED_FAILE
                })
            })
    }
}

function setComment(data) {
    return dispatch => {
        dispatch({ type: PostConstants.SET_COMMENT_REQUEST });
        PostServices.setComment(data)
            .then(res => {
                dispatch({
                    type: PostConstants.SET_COMMENT_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch((err) => {
                dispatch({
                    type: PostConstants.SET_COMMENT_FAILE
                })
            })
    }
}



