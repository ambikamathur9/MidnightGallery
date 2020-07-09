import React from "react";

class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: ""
    };
  }

  render() {
    return (
      <div className="signup">
        <p>Sign up to hear about upcoming events.</p>
        <form
          className="signup-form"
          action="http://XXXXXXXXXlist-manage2.com/subscribe/post"
          method="POST"
          noValidate
        >
          <input type="hidden" name="u" value="XXXXXXXXXXXXXXXX" />
          <input type="hidden" name="id" value="XXXXXXXXX" />
          <label htmlFor="MERGE0">
            <input
              className="signup-email"
              placeholder="   Enter you email here"
              type="email"
              name="EMAIL"
              id="MERGE0"
              value={this.state.emailValue}
              onChange={e => {
                this.setState({ emailValue: e.target.value });
              }}
              autoCapitalize="off"
              autoCorrect="off"
            />
          </label>
        </form>
        <button
          className="btn-secondary"
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
        >
          Subscribe Now
        </button>
      </div>
    );
  }
}

export default SubscribePage;
