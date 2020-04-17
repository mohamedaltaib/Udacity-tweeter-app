import { getInitialData } from "../utils/api";
import receiveTweets from "./tweets";
import receiveUsers from "./users";
import setAuthedUser from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "tylermcginnis";

export default function handleFetchData() {
  return (dispatch /*state, extra*/) => {
    dispatch(showLoading());
    return getInitialData().then(({ tweets, users }) => {
      //console.log("The state fro inside the thunk", state());
      //console.log("The extra args fro inside the thunk", extra);
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
