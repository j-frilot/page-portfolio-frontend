import React, { useState, useEffect } from "react";

const Xp = () => {
    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        fetch("https://joshuafrilot.com/api/experience")
            .then((res) => res.json())
            .then((res) => {
                setTechnology(res);
            });
    }, []);

    return (
        <div className="row">
            {technology.slice(4, 10).map((xp) => (
                <div key={xp.id} className="col s6 m4 l2">
                    <img
                        src={xp.icon}
                        alt="{xp.label} icon"
                        className="tooltipped xp-logo responsive-img"
                        data-position="bottom"
                        data-tooltip="Javascript"
                    />
                    <p className="center-align">{xp.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Xp;
