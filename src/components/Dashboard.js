import React from "react";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map((id) => (
            <li key={id}>TWEET ID: {id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(({ tweets }) => ({
  tweetIds: Object.keys(tweets),
}))(Dashboard);
