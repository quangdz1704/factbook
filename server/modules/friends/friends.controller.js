const friendsService = require('./friends.services');



exports.sendRequest = async (req, res) => {
    try {
        const sendRequest = await friendsService.sendRequest(req.user._id, req.body.id);

        res.status(200).json({
            success: true,
            messages: ['send_request_success'],
            content: sendRequest
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['send_request_faile'],
            content: error
        });
    }
};

exports.editSendRequest = async (req, res) => {
    try {
        const sendRequest = await friendsService.editSendRequest(req.params.id, req.body.status);

        res.status(200).json({
            success: true,
            messages: ['edit_send_request_success'],
            content: sendRequest
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['edit_send_request_faile'],
            content: error
        });
    }
};


exports.addRequest = async (req, res) => {
    try {
        const sendRequest = await friendsService.addRequest(req.user._id, req.body.id);

        res.status(200).json({
            success: true,
            messages: ['add_friend_success'],
            content: sendRequest
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            messages: ['add_friend_faile'],
            content: error
        });
    }
};


exports.unfriend = async (req, res) => {
    try {
        const sendRequest = await friendsService.unfriend(req.user._id, req.body.id);

        res.status(200).json({
            success: true,
            messages: ['unfriend_success'],
            content: sendRequest
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            messages: ['unfriend_faile'],
            content: error
        });
    }
};
