import React, { Component } from "react";
import { connect } from "react-redux";
import handleFetchData from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleFetchData());
  }
  render() {
    return (
      <div>
        {this.props.loading === true ? <div>loading..</div> : <Dashboard />}
      </div>
    );
  }
}

export default connect(({ authedUser }) => ({
  loading: authedUser === null,
}))(App);
