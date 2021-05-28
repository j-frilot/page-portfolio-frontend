import React from "react";

const Form = () => {
    return (
        <div class="col s12 l8">
            <div class="card-panel">
                <form
                    class="form center-align"
                    action="https://formspree.io/f/mwkwkobn"
                    name="contact-form"
                    data-netlify="true"
                    method="POST"
                >
                    <h4>Send Me Feedback</h4>

                    <div class="form-group">
                        <label for="first-name">
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

                    <div class="form-group">
                        <label for="last-name">
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                placeholder="Last Name"
                            />
                        </label>
                        <br />
                    </div>

                    <div class="form-group">
                        <label for="email">
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

                    <div class="form-group">
                        <label for="message">
                            <textarea
                                type="text"
                                id="message"
                                name="message"
                                placeholder="Leave A Message!"
                                required
                            ></textarea>
                        </label>
                    </div>

                    <button type="submit" value="Send" class="submit-btn">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
