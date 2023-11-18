import React from 'react';

const MyPost = ({ post }) => {
  return (
    <div>
      <div style={{
        padding: "2vh 0vh",
        marginTop: "5vh",
        borderTop: "1px solid grey",
        display: "flex", justifyContent: "center", gap: "5vh", textTransform: "uppercase", color: 'white'
      }}>
        <span>Post</span>
        <span>Reels</span>
        <span>Saved</span>
        <span>Tagged</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', columnGap: '2vh', rowGap: '1vh' }}>
        {post.map((ele, index) => (
          <img
            key={index}
            src={ele.postImages[0]}
            alt=""
            style={{ width: '300px', height: '300px', marginBottom: '1vh', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPost;
