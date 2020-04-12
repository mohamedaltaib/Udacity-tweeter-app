import { getInitialData } from "../utils/api";
import receiveTweets from "./tweets";
import receiveUsers from "./users";
import setAuthedUser from "./authUser";

const AUTHED_ID = "sarah_edo";

export default function handleFetchData() {
  return (dispatch /*state, extra*/) => {
    return getInitialData().then(({ tweets, users }) => {
      //console.log("The state fro inside the thunk", state());
      //console.log("The extra args fro inside the thunk", extra);
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
