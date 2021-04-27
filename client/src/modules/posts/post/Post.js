import React, { forwardRef, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import Style from "./Style";
import { connect, useSelector, useDispatch } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import {PostActions} from '../redux/actions';
const Post = (props) => {
	const classes = Style();
	const { profile, username, timestamp, description, fileType, fileData } = props
	const [likesCount, setLikesCount] = useState(1);
	const [heartIcontOrder, setHeartIcontOrder] = useState(1);
	const [smileIconOrder, setSmileIconOrder] = useState(1);
	const [thumsUpIconOrder, setThumsUpIconOrder] = useState(1);

	useEffect(() => {
		setLikesCount(Math.floor(Math.random() * 1000) + 1);
		setHeartIcontOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
		setSmileIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
		setThumsUpIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
	}, []);

	const {newFeed} = props;
	const user = newFeed ? newFeed.creator : {}
	const Reactions = () => {
		return (
			<div className={classes.footer__stats}>
				<div>
					<FavoriteIcon style={{ color: "red", order: `${heartIcontOrder} ` }} />
					<EmojiEmotionsIcon style={{ color: "orange", order: `${smileIconOrder} ` }} />
					<ThumbUpAltIcon style={{ color: " #2e81f4", order: `${thumsUpIconOrder} ` }} />
				</div>
				<h4>{likesCount}</h4>
			</div>
		);
	};
	const checkTypeFile = (data) => {
        if (typeof data === 'string' || data instanceof String) {
            let index = data.lastIndexOf(".");
            let typeFile = data.substring(index + 1, data.length);
            if (typeFile === "png" || typeFile === "jpg" || typeFile === "jpeg") {
                return true;
            }
            else return false;
        }
        else return false;
    }

	return (
		<Paper className={classes.post}>
			<div className={classes.post__header}>
				<Avatar
					src={`${process.env.REACT_APP_SERVER}${user.avatar}`}
				/>
				<div className={classes.header__info}>
					<h4>{user.surName} {user.firstName}</h4>
					<p>
						<ReactTimeago date={new Date(newFeed.createAt?.toDate()).toUTCString()} units="minute" />
					</p>
				</div>
				<MoreHorizOutlinedIcon />
			</div>
			<div className={classes.post__body}>
				<div className={classes.body__description}>
					<p>{newFeed.content}</p>
				</div>
				{newFeed.images.length && (
					<div className={classes.body__image}>
						{checkTypeFile(newFeed.images[0]) ? (
							<img src={`${process.env.REACT_APP_SERVER}${newFeed.images[0]}`} alt="post" />
						) : (
							<ReactPlayer url={`${process.env.REACT_APP_SERVER}${newFeed.images[0]}`} controls={true} />
						)}
					</div>
				)}
			</div>
			<div className={classes.post__footer}>
				<Reactions />
				<div className={classes.footer__actions}>
					<div className={classes.action__icons}>
						<ThumbUpAltOutlinedIcon />
						<h4>Like</h4>
					</div>
					<div className={classes.action__icons}>
						<ChatBubbleOutlineOutlinedIcon />
						<h4>Comment</h4>
					</div>
					<div className={classes.action__icons}>
						<ReplyOutlinedIcon style={{ transform: "scaleX(-1)" }} />
						<h4>Share</h4>
					</div>
				</div>
			</div>
		</Paper>
	);
};

const mapStateToProps = (state)=>{
    return state
}

const mapDispatchToProps ={
	getNewFeed: PostActions.getNewFeed,
}


export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(Post));
