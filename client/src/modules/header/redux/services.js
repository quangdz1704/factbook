import {
    getStorage
} from '../../../config';
import {
    sendRequest
} from '../../../helpers/requestHelper';

export const SearchServices = {
    searchPost,
}

async function searchPost(keyword) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/search/search-post`,
        method: 'POST',
        data: { keyword }
    }, true, true, 'searchPost')
}