import React from "react";

const contact = () => {
    return (
        <div className="col s12 l4">
            <div className="card-panel info-panel">
                <div className="contact-info center-align ">
                    <h4>My Info</h4>
                    <ul className="info-list">
                        <li>Phone: (504) 944-9712</li>
                        <li>
                            Email:{" "}
                            <a href="mailto:frilotdr@gmail.com">
                                frilotdr@gmail.com
                            </a>
                        </li>
                        <li>
                            Follow Me:{" "}
                            <a
                                href="https://www.linkedin.com/in/joshuafrilot/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="./assets/JOSHUA_FRILOT_RESUME.pdf"
                                target="_blank"
                            >
                                My Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default contact;
