import { PostServices } from './services';
import { PostConstants } from './constants';


export const PostActions = {
    createPost,

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

