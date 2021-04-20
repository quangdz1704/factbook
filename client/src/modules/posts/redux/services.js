import {
    getStorage
} from '../../../config';
import {
    sendRequest
} from '../../../helpers/requestHelper';

export const PostServices = {
    createPost,

}

async function createPost(data) {
    console.log('dddddddd', data);
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/post/create-post`,
        method: 'POST',
        data
    }, false, false, 'post')
}
