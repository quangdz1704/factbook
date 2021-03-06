import {
    getStorage
} from '../../../config';
import {
    sendRequest
} from '../../../helpers/requestHelper';

export const AuthService = {
    login,
    register,
    editProfile,
    getLinksOfRole,
    refresh,
    logout,
    logoutAllAccount,
    forgotPassword,
    resetPassword,
    getComponentOfUserInLink,
    changeInformation,
    changePassword,
    downloadFile,
    answerAuthQuestion,
    checkExistsPassword2,
    getInforUser,
    changeAvatar,
    getProfileById,
    unfriend,
    addFriend
};

async function login(data) {
    console.log()
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/login`,
        method: 'POST',
        data
    }, false, false, 'auth')
}
async function register(data) {
    console.log('seriviceeeeee', data);
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/register`,
        method: 'POST',
        data
    }, true, true, 'auth')
}

function logout() {
    console.log('logout');
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/logout`,
        method: 'GET',
    }, false, true, 'auth');
}

function logoutAllAccount() {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/logout-all-account`,
        method: 'GET',
    }, false, true, 'auth');
}

function editProfile(data) {
    var id = getStorage("userId");

    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/user/users/${id}`,
        method: 'PATCH',
        data: data,
    }, true, true, 'auth');
}

function changeInformation(data) {
    var id = getStorage("userId");
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/profile/${id}/change-information`,
        method: 'PATCH',
        data: data,
    }, true, true, 'auth');
}

function changePassword(data) {
    var id = getStorage("userId");
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/profile/${id}/change-password`,
        method: 'PATCH',
        data: data,
    }, true, true, 'auth');
}

function getLinksOfRole(idRole) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/get-links-that-role-can-access/${idRole}`,
        method: 'GET',
    }, false, true, 'auth');
}

function refresh() {
    var id = getStorage("userId");

    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/get-profile/${id}`,
        method: 'GET',
    }, false, true, 'auth');
}

function forgotPassword(data) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/forget-password`,
        method: 'POST',
        data
    }, true, true, 'auth');
}

function resetPassword(data) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/reset-password`,
        method: 'POST',
        data
    }, true, true, 'auth');
}

function getComponentOfUserInLink(currentRole, linkId) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/component/components`,
        method: 'GET',
        params: {
            currentRole: currentRole,
            linkId: linkId,
        }
    }, false, true, 'auth');
}

/**
 * Download file
 * @param {*} path: ???????ng d???n file c???n t???i
 */
function downloadFile(path, type) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/download-file/`,
        method: 'GET',
        responseType: type ? undefined : 'blob',
        params: {
            path: path,
            type: type
        }
    }, false, false, 'auth');
}

function answerAuthQuestion(data) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/profile/answer-questions`,
        method: 'PATCH',
        data
    }, true, true, 'auth');
}

function checkExistsPassword2() {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/profile/check-user-exists-password2`,
        method: 'GET',
    }, false, false, 'auth');
}

function getInforUser() {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/get-user`,
        method: 'GET',
    }, false, false, 'auth');
}

function getProfileById(id) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/get-profile/${id}`,
        method: 'GET',
    }, false, false, 'auth');
}

function addFriend(id) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/friend/add-friend`,
        method: 'POST',
        data: { id: id }
    }, true, true, 'auth');
}

function unfriend(id) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/friend/unfriend`,
        method: 'POST',
        data: { id: id }
    }, true, true, 'auth');
}

function changeAvatar(data) {
    return sendRequest({
        url: `${process.env.REACT_APP_SERVER}/auth/profile/change-avatar`,
        method: 'PATCH',
        data,
    }, true, true, 'auth');
}