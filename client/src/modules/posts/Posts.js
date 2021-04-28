import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";
import db from "../../firebase";
import moment from "moment";
import { connect, useSelector, useDispatch } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import {PostActions} from './redux/actions';
const Posts = (props) => {
  const classes = Style();

  useEffect(() => {
    props.getNewFeed();
  }, []);

  const {posts} = props.post
  const fakeData = [
    {
      key: "1",
      profile: "",
      username: "NTQ",
      timestamp: moment("18-06-2021", "DD-MM-YYYY"),
      description: "QyDsd",
      // fileType: { post.data.fileType }
      // fileData: { post.data.fileData }
    },
    {
      key: "2",
      profile: "",
      username: "NTD",
      timestamp: moment("18-06-2021", "DD-MM-YYYY"),
      description: "QyDsd",
      // fileType: { post.data.fileType }
      // fileData: { post.data.fileData }
    },
    {
      key: "3",
      profile: "",
      username: "NQL",
      timestamp: moment("18-06-2021", "DD-MM-YYYY"),
      description: "QyDsd",
      // fileType: { post.data.fileType }
      // fileData: { post.data.fileData }
    },
    {
      key: "4",
      profile: "",
      username: "NTQD",
      timestamp: moment("18-06-2021", "DD-MM-YYYY"),
      description: "QyDsd",
      // fileType: { post.data.fileType }
      // fileData: { post.data.fileData }
    },
  ]
  console.log('list pótttttttttttt', posts);
  return (
    <div className={classes.posts}>
      <FlipMove style={{ width: "100%" }}>
        {posts.map((post) => (
          <Post
            newFeed={post}
          />
        ))}
      </FlipMove>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  posts: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const mapStateToProps = (state=>{
  return state
});

const mapDispatchToProps={
  getNewFeed: PostActions.getNewFeed
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(Posts));
