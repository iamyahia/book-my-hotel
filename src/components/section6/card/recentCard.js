import React from "react";
import Grid from "@mui/material/Grid";

const recentCard = ({ post }) => {
  return (
    <>
      <div className="recentPosts">
        <h5>{post.title}</h5>
        <p className="p">{post.subHead}</p>
      </div>
      {/* <div class="image"> */}
      <img class="image" src={post.image} />
      {/* </div> */}
    </>
  );
};

export default recentCard;
