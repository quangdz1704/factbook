const postService = require('./post.services');
const { createPostValidation } = require('./post.validate')


exports.createPost = async (req, res) => {
    try {

        // const checkValidate = await createPostValidation({ userId: req.user._id });
        // if (checkValidate.error) {
        //     return {
        //         success: false,
        //         messages: ['validate_error'],
        //         content: checkValidate.error
        //     }
        // }
        let files = [];
        if (req.files !== undefined) {
            req.files.forEach((elem) => {
                let path = elem.destination + '/' + elem.filename;
                files.push(path)

            })
        }
        console.log('body', req.body);
        const post = await postService.createPost(req.user._id, req.body, files);

        res.status(200).json({
            success: true,
            messages: ['add_post_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['add_post_faile'],
            content: error
        });
    }
};

exports.editPost = async (req, res) => {
  //  try {
        // let files = [];
        // if (req.files !== undefined) {
        //     req.files.forEach((elem) => {
        //         let path = elem.destination + '/' + elem.filename;
        //         files.push(path)

        //     })
        // }
        const post = await postService.editPost( req.params.id, req.body);

        res.status(200).json({
            success: true,
            messages: ['edit_post_success'],
            content: post
        });
    // } catch (error) {
    //     res.status(400).json({
    //         success: false,
    //         messages: ['edit_post_faile'],
    //         content: error
    //     });
    // }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await postService.deletePost(req.params.id);

        res.status(200).json({
            success: true,
            messages: ['X??a b??i th??nh c??ng'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['delete_post_faile'],
            content: error
        });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await postService.getPost(req.params.id);

        res.status(200).json({
            success: true,
            messages: ['get_post_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['get_post_faile'],
            content: error
        });
    }
};

exports.getListPost = async (req, res) => {
    try {
        const post = await postService.getListPost(req.user._id);

        res.status(200).json({
            success: true,
            messages: ['get_list_post_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['get_list_post_faile'],
            content: error
        });
    }
};

exports.getListPostPerson = async (req, res) => {
    try {
        const post = await postService.getListPostPerson(req.params.id);

        res.status(200).json({
            success: true,
            messages: ['get_list_post_person_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['get_list_post_person_faile'],
            content: error
        });
    }
};
exports.setComment = async (req, res) => {
    try {

        let files = [];
         console.log("fieleeeeee", req.files);
        if (req.files !== undefined) {
           
            req.files.forEach((elem) => {

                let path = elem.destination + '/' + elem.filename;
                files.push(path)

            })
        }
        console.log('req id', req.params);
        console.log('req body', req.body);
        console.log('req file', files);
        const post = await postService.setComment(req.params.id, req.user._id, req.body, files);

        res.status(200).json({
            success: true,
            messages: ['set_comment_success'],
            content: post
        });
    } catch (error) {
        console.log('error', error);
        res.status(400).json({
            success: false,
            messages: ['set_comment_faile'],
            content: error
        });
    }
};

exports.getComment = async (req, res) => {
    try {
        const post = await postService.getComment(req.params.id);

        res.status(200).json({
            success: true,
            messages: ['get_comment_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['get_comment_faile'],
            content: error
        });
    }
};

exports.likePost = async (req, res) => {
    try {
        const post = await postService.likePost(req.user._id, req.params.id);

        res.status(200).json({
            success: true,
            messages: ['like_post_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['like_post_faile'],
            content: error
        });
    }
};

exports.unlikePost = async (req, res) => {
    try {
        const post = await postService.unlikePost(req.user._id, req.params.id);

        res.status(200).json({
            success: true,
            messages: ['unlike_post_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['unlike_post_faile'],
            content: error
        });
    }
};

exports.reportPost = async (req, res) => {
    try {
        const post = await postService.reportPost(req.user._id, req.params.id, req.body.description);

        res.status(200).json({
            success: true,
            messages: ['report_post_success'],
            content: post
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messages: ['report_post_faile'],
            content: error
        });
    }
};
