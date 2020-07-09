import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://gmail.us10.list-manage.com/subscribe/post?u=ade786b8f1d35b00447b11a2e&amp;id=c9baf872b1";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className="custom-form">
        <h4 style={{ padding: "1em", fontSize: "3vh" }}>
          Sign up to hear about upcoming events.
        </h4>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);

export default CustomForm;
