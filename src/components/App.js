import React, { Component } from "react";
import { connect } from "react-redux";
import handleFetchData from "../actions/shared";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import LoadingBar from "react-redux-loading";
import TweetPage from "./TweetPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleFetchData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <TweetPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
        )}
      </div>
    );
  }
}

export default connect(({ authedUser }) => ({
  loading: authedUser === null,
}))(App);
