import React from "react";

export default function VoteButtons({upVotes, downVotes, plusOne, minusOne}){



    return (
    <div>
    <button onClick={plusOne}>{upVotes}👍</button><button onClick=  {minusOne}>{downVotes}👎</button>
    </div>
    );
}