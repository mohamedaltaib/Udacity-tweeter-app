import React from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";
import { handleToggleTweet } from "../actions/tweets";

class Tweet extends React.Component {
  toParent = (e) => {
    e.preventDefault();
    //implent go to paren code here....
  };

  handleLike = (e) => {
    e.preventDefault();
    const { dispatch, tweet, authedUser } = this.props;
    dispatch(
      handleToggleTweet({
        id: tweet.id,
        authedUser,
        hasLiked: tweet.hasLiked,
      })
    );
  };

  render() {
    const { tweet } = this.props;
    if (tweet === null) {
      return <div>This Tweet not exist...</div>;
    }
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      replies,
      likes,
      parent,
    } = tweet;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => this.toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>

          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button
              className="heart-button"
              onClick={(e) => this.handleLike(e)}
            >
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
})(Tweet);
