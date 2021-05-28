import React from "react";

const Intro = () => {
    return (
        <section id="top" class="container">
            <div class="row icons">
                <div class="col s8 offset-s2">
                    <ul class="web-links">
                        <li>
                            <a
                                href="https://github.com/j-frilot"
                                target="_blank"
                                rel="noreferrer"
                                class="link tooltipped"
                                data-position="bottom"
                                data-tooltip="Github"
                            >
                                Github
                            </a>
                        </li>

                        <li>
                            <a
                                href="./assets/JOSHUA_FRILOT_RESUME.pdf"
                                target="_blank"
                                rel="noreferrer"
                                class="link tooltipped"
                                data-position="bottom"
                                data-tooltip="Resume"
                            >
                                Resume
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/joshuafrilot/"
                                target="_blank"
                                rel="noreferrer"
                                class="link tooltipped"
                                data-position="bottom"
                                data-tooltip="LinkedIn"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="intro center-align">
                <h1>Hey, I'm Joshua Frilot</h1>
                <h2 class="show-on-small "> Web Developer</h2>
                <h2 class="show-on-small "> Lets Work Together!</h2>

                <p>
                    I focus on creating <span class="stand">clean</span> and{" "}
                    <span class="stand">visually appealing</span> work. I have
                    worked with languages such as{" "}
                    <span class="stand">javascript, html, and css</span>.
                    Please,{" "}
                    <a href="#contact-1" class="stand">
                        contact me
                    </a>{" "}
                    if you would like to talk or or learn more about my work.
                </p>
            </div>
            <hr class="hr" />
        </section>
    );
};

export default Intro;
