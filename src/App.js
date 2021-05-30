import Intro from "./components/Intro";
import Xp from "./components/Xp";
import Skills from "./components/Skills";
// import Work from "./components/Work";
import Form from "./components/Form";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <div className="top-bar"></div>
            <div className="bucket">
                <Intro />
                <section id="skills" className="container">
                    <h3>Some of my skills</h3>
                    <Skills />

                    <h5>I have experience using:</h5>
                    <Xp />
                    <hr className="hr"></hr>
                </section>
                <div id="contact" className="container">
                    <div id="contact-me" className="row">
                        <Form />
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
