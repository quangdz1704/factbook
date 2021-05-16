import { SearchConstants } from './constants';

export const CallApiStatus = {
    INITIALIZED: 0,
    CALLING: 1,
    FINISHED: 2,
}
var initState = {
    calledAPI: CallApiStatus.INITIALIZED,
    isLoading: false,
    result: {}
}

export function searchPost(state = initState, action) {
    switch (action.type) {
        case SearchConstants.SEARCH_POST_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: null,
                calledAPI: CallApiStatus.CALLING,
            };

        case SearchConstants.SEARCH_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                result: action.payload
            }

        case SearchConstants.SEARCH_POST_FAILE:
            return {
                ...state,
                isLoading: false,
                calledAPI: CallApiStatus.FINISHED,
            };


        default:
            return {
                ...state
            };

    }
}