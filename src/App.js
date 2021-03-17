import "./App.css";
import myBird from "./spring bird.jpg";
import "./style.css";

function App() {
    return (
        <div className="App">
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Manel Ben Amar</h1>
                <br />
                <img src={myBird} alt="bird" width="50%" />
                <br />
                <img
                    src="/butterflies-1127666_1920.jpg"
                    alt="butterflies"
                    width="50%"
                />
            </div>
            <br />
            <video width={720} height={440} controls>
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
