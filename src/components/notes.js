<div id="my skills" className="row">
    {technology.slice(0, 4).map((xp) => (
        <div key={xp.id} className="col s6 m3 skill">
            <h4>{xp.label}</h4>
            <i className="material-icons">{xp.icon}</i>
        </div>
    ))}
</div>;
