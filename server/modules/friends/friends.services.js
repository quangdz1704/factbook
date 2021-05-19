const User = require('../../models/user');
const Request = require('../../models/request_friend');
const user = require('../../models/user');

exports.addRequest = async (userId, id) => {
    await User.findByIdAndUpdate(userId,
        {
            $push: { listfriends: id }
        },
        {
            $new: true,
        }
    )
    await User.findByIdAndUpdate(id,
        {
            $push: { listfriends: userId }
        },
        {
            $new: true,
        }
    )
    let user = await User.findById(userId)
        .select("-password -active -token")
        .populate([
            { path: "listfriends", select: "id active firstName surName avatar birthday gender createdAt" },
        ]);
    let friend = await User.findById(id)
        .select("-password -active -token")
        .populate([
            { path: "listfriends", select: "id active firstName surName avatar birthday gender createdAt" },
        ]);

    return {
        user,
        friend,
    }
}

exports.unfriend = async (userId, id) => {
    await User.findByIdAndUpdate(userId,
        {
            $pull: { listfriends: id }
        },
        { safe: true }
    )
    await User.findByIdAndUpdate(id,
        {
            $pull: { listfriends: userId }
        },
        { safe: true }
    )
    let user = await User.findById(userId)
        .select("-password -active -token")
        .populate([
            { path: "listfriends", select: "id active firstName surName avatar birthday gender createdAt" },
        ]);
    let friend = await User.findById(id)
        .select("-password -active -token")
        .populate([
            { path: "listfriends", select: "id active firstName surName avatar birthday gender createdAt" },
        ]);

    return {
        user,
        friend,
    }
}

exports.sendRequest = async (userId, id) => {
    let request = await Request.create({
        from: userId,
        to: id,
        status: 1,
        createAt: new Date(),
    });

    return request;
}

exports.editSendRequest = async (id, status) => {
    let request = await Request.findByIdAndUpdate(id,
        {
            status: status,
        });

    if (status == 'accept') {
        var user = await User.findOne(request.from)
        user.listfriends.push(request.to)
        user.save()

        var user2 = await User.findOne(request.to)
        user2.listfriends.push(request.from)
        user2.save()
    }

    return request;
}

