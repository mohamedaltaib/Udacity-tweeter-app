export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export default function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}
