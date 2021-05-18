import { SearchServices } from './services';
import { SearchConstants } from './constants';


export const SearchActions = {
    searchPost,
}

function searchPost(keyword) {
    return dispatch => {
        dispatch({ type: SearchConstants.SEARCH_POST_REQUEST });
        SearchServices.searchPost(keyword)
            .then(res => {
                dispatch({
                    type: SearchConstants.SEARCH_POST_SUCCESS,
                    payload: res.data.content,
                });
            })
            .catch((err) => {
                dispatch({
                    type: SearchConstants.SEARCH_POST_FAILE,
                })
            })
    }
}
