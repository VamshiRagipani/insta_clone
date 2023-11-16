import React from "react";
import "../../Styles/post.css";
import { obj as postObject } from "../../data/postData";

const Post = () => {
  return (
    <div className="postContainer">
      {postObject.map((postData) => (
        <div style={{ border: "1px solid grey", padding: "10px 5px", marginBottom: "10px" }} key={postData.id}>
          <div className="postHeader">
            <img
              src={postData.profilePic}
              width="30px"
              style={{ borderRadius: "50%" }}
              alt="Profile"
            />
            <span>{postData.username}</span>
          </div>

          <div className="postMain">
            <img width="100%" src={postData.postPic} alt="Post" />
            <span>{postData.likes} likes </span>
            <span style={{ color: "grey", marginBottom: "20px" }}>{postData.aboutPost}</span>
          </div>

          <div>
            {postData.comments.map((comment, index) => (
              <div  style={{ marginBottom :"12 px"}}
              key={index}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <img
                    width="20px"
                    height="20px"
                    style={{ borderRadius: "50%" }}
                    src={comment.profilePic}
                    alt="Commenter"
                  />
                  <span>{comment.username}</span>
                  <span>{comment.comment}</span>
                </div>
                <span style ={{color :"grey", fontsize: "12px", marginLeft :"25 px", marginTop :"10 px"}}>{comment.likes} likes </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
