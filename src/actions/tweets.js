import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { TiHeadphones } from "react-icons/ti";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const SAVE_TWEET = "SAVE_TWEET";

export default function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}

function addTweet(tweet) {
  return {
    type: SAVE_TWEET,
    tweet,
  };
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));
    console.log(info);
    return saveLikeToggle(info).catch(() => {
      dispatch(toggleTweet(info));
      alert("There was an error liking the tweet. Try again!");
    });
  };
}

export function handleAddTweet(text, replyingTo = null, cp) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveTweet({
      text,
      author: authedUser,
      replyingTo,
    })
      .then((tweet) => {
        dispatch(addTweet(tweet));
        dispatch(hideLoading());
        cp();
      })
      .catch((e) => console.log(e, "--------------"));
  };
}
