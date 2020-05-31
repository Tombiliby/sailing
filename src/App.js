import React from "react";
import Checklist from "./components/checklist/checklist"
import SetColorScheme from "./components/setColorScheme"
import figureChecklist from "./figures/checklist.svg";
import Quiz from "./components/quiz/Quiz"
//import Playlist from "./components/playlist/Playlist"
import Card from "./components/Card"


function App() {
  return (
    <>
      <div className="debbug hidden">
        <div className="colorScheme" data-theme="triade">
          <div className="item default"></div>
          <div className="item variant1"></div>
          <div className="item variant2"></div>
          <div className="item variant3"></div>
          <div className="item variant4"></div>
        </div>
        <div className="colorScheme" data-theme="similar">
          <div className="item default"></div>
          <div className="item variant1"></div>
          <div className="item variant2"></div>
          <div className="item variant3"></div>
          <div className="item variant4"></div>
        </div>
      </div>

      <div className="layoutFX" data-theme="triade">
        <div className="mainLayoutGrid">
          <div className="cel content">
            <Card />
          </div>
          <div className="cel content">
            <Quiz />
          </div>
          <div className="cel content">
            {/*<Playlist />*/}
          </div>
          <div className="cel content">
            <SetColorScheme />
          </div>
          <div className="cel figure">

          </div>
          <div className="cel content">
            <Checklist />
          </div>
          <div className="cel figure">
            <img src={figureChecklist} alt="" />
          </div>
        </div>
        <div className="gradientFX"></div>
      </div>

    </>
  );
}

export default App;
