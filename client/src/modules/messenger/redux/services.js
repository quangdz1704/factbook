import {
    getStorage
} from '../../../config';

import { sendRequest } from '../../../helpers/requestHelper';

export const ChatServices = {
    getAllConversations,

}

async function getAllConversations() {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/chat/get-all-conversations`,
        method: "GET",

    }, false, false, 'message')
}

async function saveMessage() {
    
}