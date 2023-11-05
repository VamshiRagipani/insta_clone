import React from "react";
import "../../Styles/post.css"
import {obj as postObject} from "../../data/postData"
const Post = ()=> {
    return (
        <div className="postContainer">
            {
                postObject.map(postData =>{
                    return <div>
                        <div class="postHeader">
                            <img src={'${postData.profilePic}'} width="30px" style={{borderRadius:"50%"}}/>
                            <span>{postData.username}</span>
                        </div>
                        
                        <div className="postMain">
                            <img width="100%" src={'${postData.postPic}'}/>
                            <span>{postData.likes}</span>
                            <span>{postData.aboutPost}</span>
                        </div>
                        
                        <div>
                            {
                                postData.comments.map(comment =>{
                                    return <div>
                                        <div style={{display:"flex",gap:'10px',alignItems:'center'}}>
                                        <img width="20px" height="20px" style={{borderRadius:"50%"}} src={'${comment.profilePic}'}/>
                                        <span>{comment.username}</span>
                                        <span>{comment.comment}</span>
                                    </div>
                                    <span>{comment.likes}</span>
                                    </div>

                                })
                                
                            }
                            </div>
                            </div>
                 })
                 
            }
       
        </div>
    )
}

export default Post