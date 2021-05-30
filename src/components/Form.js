import React from "react";

const Form = () => {
    return (
        <div className="col s12 l8">
            <div className="card-panel">
                <form
                    className="form center-align"
                    action="https://formspree.io/f/mwkwkobn"
                    name="contact-form"
                    data-netlify="true"
                    method="POST"
                >
                    <h4>Send Me Feedback</h4>

                    <div className="form-group">
                        <label htmlFor="first-name">
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                placeholder="First Name"
                                required
                            />
                        </label>
                        <br />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last-name">
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                placeholder="Last Name"
                            />
                        </label>
                        <br />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            <input
                                type="email"
                                name="_replyto"
                                id="email"
                                placeholder="Email Address"
                                required
                            />
                        </label>
                        <br />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            <textarea
                                type="text"
                                id="message"
                                name="message"
                                placeholder="Leave A Message!"
                                required
                            ></textarea>
                        </label>
                    </div>

                    <button type="submit" value="Send" className="submit-btn">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
