import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

class TweetPage extends React.Component {
  render() {
    const { id, replies } = this.props;
    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id} />
        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        {replies.map((replyId) => {
          return <Tweet id={replyId} />;
        })}
      </div>
    );
  }
}

export default connect(({ authedUser, tweets, users }, praps) => {
  const id = praps.match.params.id;
  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[id].timestamp
        ),
  };
})(TweetPage);
