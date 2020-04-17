import React from "react";
import { handleAddTweet } from "../actions/tweets";
import { connect } from "react-redux";

class NewTeet extends React.Component {
  state = {
    text: "",
  };

  constructor(props) {
    super(props);
    this.textRef = React.createRef();
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;
    dispatch(
      handleAddTweet(text, id, () => {
        this.textRef.current.value = "";
      })
    );
  };

  render() {
    const { text } = this.state;
    let tweetLeft = 280 - text.length;
    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet">
          <textarea
            className="textarea"
            maxlenght={280}
            placeholder="What's going on?"
            onChange={this.handleChange}
            value={text}
            ref={this.textRef}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button
            onClick={(e) => this.handleSubmit(e)}
            className="btn"
            type="submit"
            disabled={text == ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTeet);
