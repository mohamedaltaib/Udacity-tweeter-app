import React, { Component } from "react";
import { connect } from "react-redux";
import handleFetchData from "../actions/shared";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleFetchData());
  }
  render() {
    const { tweets, users } = this.props.state;

    return <div>ok</div>;
  }
}

export default connect((state) => ({
  state: state,
}))(App);
