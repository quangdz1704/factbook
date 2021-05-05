import {
    getStorage
} from '../../../config';
import {
    sendRequest
} from '../../../helpers/requestHelper';

export const PostServices = {
    createPost,
    getNewFeed,
    setComment,
}

async function createPost(data) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/post/create-post`,
        method: 'POST',
        data
    }, true, true, 'post')
}

async function getNewFeed() {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/post/get-list-post`,
        method: 'GET',

    }, false, false, 'post')
}

async function setComment(data) {
    console.log('hello', data);
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/post/set-comment/${data.id}`,
        method: 'POST',
        data
    }, true, true, 'post')
}