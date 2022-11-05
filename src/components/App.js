import React, {useState} from "react";
import video from "../data/video.js";
import VoteButtons from "./VoteButtons.js";
import VideoPlayer from "./VideoPlayer.js";
import Comments from "./Comments.js";

function App() {

  const [upVotes, upVote] = useState(0);
  const [downVotes, downVote] = useState(0);
  function plusOne(){
    return upVote(upVotes+1);
  }
  function minusOne(){
    return downVote(downVotes+1);
  }

  const [showHideText, showHide] = useState(true);

  function handleCommentsClick(){
  showHide(!showHideText)
  }

  return (
    <div className="App">
      <VideoPlayer videoData={video}/>
      <VoteButtons plusOne={plusOne} upVotes={upVotes} minusOne={minusOne} downVotes={downVotes}/>
      <Comments showHideText={showHideText} handleCommentsClick={handleCommentsClick} videoData={video}/>
    </div>
  );
}

export default App;

//components under App

// Video Info div 
// - h2 tag with title
// - views | upload date (pertains to the video's information)
//    - date is static, views update 

// upvote down vote buttons
// - each button has its own state = # of votes.

// comments button

// comments div
