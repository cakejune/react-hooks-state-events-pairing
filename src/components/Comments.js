import React from "react";

export default function Comments({ showHide, showHideText, handleCommentsClick, videoData}) {
    const showOrHide = showHideText === true ? "Show Comments" : "Hide Comments";
    const displayedComments = showHideText === false ? [...videoData.comments] : [''];
  return (
    <div>
      <button onClick={handleCommentsClick}>{showOrHide}</button>
      <hr/>
      {displayedComments.map((comment)=>{
      return(
      <div style={{color: "blue"}}>
        User: {comment.user}
        <br/>
        Comment: "{comment.comment}"
      </div>
      )
      })}
      </div>
)
}
