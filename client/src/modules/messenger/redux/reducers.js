import { ChatConstants } from './constants';

export const CallApiStatus = {
    INITIALIZED: 0,
    CALLING: 1,
    FINISHED: 2,
}
var initState = {
    calledAPI: CallApiStatus.INITIALIZED,
    user: {},
    conversations: [],
    messages: [],
    isLoading: false,
    error: null,
}

export function chat(state = initState, action) {
    switch (action.type) {
        case ChatConstants.GET_ALL_CONNECTIONS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
                calledAPI: CallApiStatus.CALLING,
            };
        
        case ChatConstants.GET_ALL_CONNECTIONS_SUCCESS:
            return {
                ...state,
                conversations: action.payload,
                isLoading: false,
                error: null,
                calledAPI: CallApiStatus.FINISHED
            };
        
        case ChatConstants.GET_ALL_CONNECTIONS_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                calledAPI: CallApiStatus.FINISHED,
            }
        default:
            return {
                ...state
            };
    }
}
