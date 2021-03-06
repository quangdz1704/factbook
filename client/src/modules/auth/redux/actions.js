import { AuthService } from "./services";
import { AuthConstants } from "./constants";
import { setStorage } from '../../../config';
import { SocketConstants } from "../../socket/redux/constants";
const FileDownload = require('js-file-download');
export const AuthActions = {
    login,
    logout,
    logoutAllAccount,
    editProfile,
    getLinksOfRole,
    refresh,
    resetPassword,
    forgotPassword,
    getComponentOfUserInLink,
    changeInformation,
    changePassword,
    downloadFile,
    answerAuthQuestion,
    checkExistsPassword2,
    register,
    getInforUser,
    changeAvatar,
    getProfileById,
    addFriend,
    unFriend,
}

function login(user) {
    console.log('uuuu', user);
    return dispatch => {
        dispatch({ type: AuthConstants.LOGIN_REQUEST });
        AuthService.login(user)
            .then(res => {
                setStorage('jwt', res.data?.content?.payload?.token);
                setStorage('userId', res.data?.content?.payload?.id);

                dispatch({
                    type: AuthConstants.LOGIN_SUCCESS,
                    payload: res.data?.content?.payload
                })
                // dispatch({ type: SocketConstants.CONNECT_SOCKET_IO })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.LOGIN_FAILE, payload: err?.response?.data?.messages?.[0] });
                // dispatch({ type: SocketConstants.DISCONNECT_SOCKET_IO })
            })
    }
}

function logout() {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGOUT_REQUEST });
        AuthService.logout()
            .then(res => {
                // Do sẽ reset localStorage và redux, không cần gọi dispatch({type: AuthConstants.LOGOUT_SUCCESS});
                dispatch({ type: SocketConstants.DISCONNECT_SOCKET_IO })
                dispatch({ type: 'RESET' })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.LOGOUT_FAILE });
            })
    }
}
function register(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.REGISTER_REQUEST });
        AuthService.register(data)
            .then(res => {
                dispatch({
                    type: AuthConstants.REGISTER_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.REGISTER_FAILE });
            })
    }
}


function logoutAllAccount() {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGOUT_ALL_REQUEST });
        AuthService.logoutAllAccount()
            .then(res => {
                // Do sẽ reset localStorage và redux, Không cần gọi dispatch({type: AuthConstants.LOGOUT_ALL_SUCCESS});
                dispatch({ type: SocketConstants.DISCONNECT_SOCKET_IO })
                dispatch({ type: 'RESET' });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.LOGOUT_ALL_FAILE });
            })
    }
}

function editProfile(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.EDIT_PROFILE_REQUEST });
        AuthService.editProfile(data)
            .then(res => {
                dispatch({
                    type: AuthConstants.EDIT_PROFILE_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.EDIT_PROFILE_FAILE });
            })
    }
}

function changeInformation(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.CHANGE_USER_INFORMATION_REQUEST });
        AuthService.changeInformation(data)
            .then(res => {
                dispatch({
                    type: AuthConstants.CHANGE_USER_INFORMATION_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.CHANGE_USER_INFORMATION_FAILE });
            })
    }
}

function changePassword(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.CHANGE_USER_PASSWORD_REQUEST });
        AuthService.changePassword(data)
            .then(res => {
                dispatch({
                    type: AuthConstants.CHANGE_USER_PASSWORD_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.CHANGE_USER_PASSWORD_FAILE });
            })
    }
}

function getLinksOfRole(idRole) {
    return dispatch => {
        dispatch({ type: AuthConstants.GET_LINKS_OF_ROLE_REQUEST });
        return new Promise((resolve, reject) => {
            AuthService.getLinksOfRole(idRole)
                .then(res => {
                    dispatch({
                        type: AuthConstants.GET_LINKS_OF_ROLE_SUCCESS,
                        payload: res.data.content
                    });
                    resolve(res);
                })
                .catch(err => {
                    dispatch({ type: AuthConstants.GET_LINKS_OF_ROLE_FAILE });
                    reject(err);
                })
        })

    }
}

function refresh() {
    return dispatch => {
        dispatch({ type: AuthConstants.REFRESH_DATA_USER_REQUEST });
        AuthService.refresh()
            .then(res => {
                dispatch({
                    type: AuthConstants.REFRESH_DATA_USER_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.REFRESH_DATA_USER_FAILE });
            })
    }
}

function forgotPassword(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.FORGOT_PASSWORD_REQUEST });
        AuthService.forgotPassword(data)
            .then(res => {
                dispatch({
                    type: AuthConstants.FORGOT_PASSWORD_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.FORGOT_PASSWORD_FAILE });
            })
    }
}

function resetPassword(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.RESET_PASSWORD_REQUEST });
        AuthService.resetPassword(data)
            .then(res => {
                dispatch({
                    type: AuthConstants.RESET_PASSWORD_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.RESET_PASSWORD_FAILE });
            })

    }
}

function getComponentOfUserInLink(curentRole, linkId) {
    return dispatch => {
        dispatch({ type: AuthConstants.GET_COMPONENTS_OF_USER_IN_LINK_REQUEST });
        AuthService.getComponentOfUserInLink(curentRole, linkId)
            .then(res => {
                dispatch({
                    type: AuthConstants.GET_COMPONENTS_OF_USER_IN_LINK_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.GET_COMPONENTS_OF_USER_IN_LINK_FAILE });
            })
    }
}
function downloadFile(path, fileName, save = true) {
    return dispatch => {
        dispatch({ type: AuthConstants.DOWNLOAD_FILE_REQUEST });
        AuthService.downloadFile(path)
            .then(res => {
                if (!save) {
                    let fileLoad = new FileReader();

                    fileLoad.readAsDataURL(res.data);
                    fileLoad.onload = () => {
                        dispatch({
                            type: AuthConstants.DOWNLOAD_FILE_SUCCESS,
                            payload: {
                                fileName: fileName,
                                file: fileLoad.result,
                                blob: res.data,
                            }
                        });
                    }
                } else {
                    dispatch({
                        type: AuthConstants.DOWNLOAD_FILE_SUCCESS
                    });
                    const content = res.headers['content-type'];
                    FileDownload(res.data, fileName, content);
                }
            })
            .catch(err => { dispatch({ type: AuthConstants.DOWNLOAD_FILE_FAILURE }) })
    }
}

function answerAuthQuestion(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.ANSWER_AUTH_QUESTIONS_REQUEST });
        return new Promise((resolve, reject) => {
            AuthService.answerAuthQuestion(data)
                .then(res => {
                    dispatch({
                        type: AuthConstants.ANSWER_AUTH_QUESTIONS_SUCCESS,
                        payload: res.data.content
                    });
                    resolve(res);
                })
                .catch(err => {
                    dispatch({ type: AuthConstants.ANSWER_AUTH_QUESTIONS_FAILE });
                    reject(err);
                })
        })

    }
}

function checkExistsPassword2() {
    return dispatch => {
        dispatch({ type: AuthConstants.CHECK_PASSWORD2_EXITS_REQUEST });
        AuthService.checkExistsPassword2()
            .then(res => {
                dispatch({
                    type: AuthConstants.CHECK_PASSWORD2_EXITS_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.CHECK_PASSWORD2_EXITS_FAILE });
            })

    }
}

function getInforUser() {
    return dispatch => {
        dispatch({ type: AuthConstants.GET_INFOR_USER_REQUEST });
        AuthService.getInforUser()
            .then(res => {
                dispatch({
                    type: AuthConstants.GET_INFOR_USER_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.GET_INFOR_USER_FAILE })
            })
    }
}

function getProfileById(id) {
    console.log('getProfileById', id);
    return dispatch => {
        dispatch({ type: AuthConstants.GET_USER_BY_ID_REQUEST });
        AuthService.getProfileById(id)
            .then(res => {
                dispatch({
                    type: AuthConstants.GET_USER_BY_ID_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.GET_USER_BY_ID_FAILE })
            })
    }
}

function addFriend(id) {
    return dispatch => {
        dispatch({ type: AuthConstants.ADD_FRIEND_REQUEST });
        AuthService.addFriend(id)
            .then(res => {
                dispatch({
                    type: AuthConstants.ADD_FRIEND_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.ADD_FRIEND_FAILE })
            })
    }
}

function unFriend(id) {
    return dispatch => {
        dispatch({ type: AuthConstants.UN_FRIEND_REQUEST });
        AuthService.unfriend(id)
            .then(res => {
                dispatch({
                    type: AuthConstants.UN_FRIEND_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.UN_FRIEND_FAILE })
            })
    }
}

function changeAvatar(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.CHANGE_AVATAR_REQUEST });
        AuthService.changeAvatar(data)
            .then(res => {
                dispatch({
                    type: AuthConstants.CHANGE_AVATAR_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({ type: AuthConstants.CHANGE_AVATAR_FAILE })
            })
    }
}