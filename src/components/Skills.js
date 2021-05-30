import React from "react";

const Skills = () => {
    return (
        <div id="my skills" className="row">
            <div className="col s6 m3 skill">
                <h4>Responsive</h4>
                <i className="material-icons">app_settings_alt</i>
            </div>

            <div className="col s6 m3 skill">
                <h4>Efficiency</h4>
                <i className="material-icons">update</i>
            </div>

            <div className="col s6 m3 skill">
                <h4>Adaptive</h4>
                <i className="material-icons skill">add_task</i>
            </div>

            <div className="col s6 m3">
                <h4>Innovative</h4>
                <i className="material-icons">lightbulb_outline</i>
            </div>
        </div>
    );
};

export default Skills;
