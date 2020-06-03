import React from "react";
import Checklist from "./components/checklist/checklist"
import SetColorScheme from "./components/setColorScheme"
import Quiz from "./components/quiz/Quiz"
import Playlist from "./components/playlist/Playlist"
import Card from "./components/Card"
import MainTitle from "./components/MaintTitle"


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
          <div className="cel sectionMainTitle">
            <div className="inner">
              <MainTitle />
            </div>
          </div>
          <div className="cel sectionWeather">
            <div className="inner">
              <SetColorScheme />
            </div>
          </div>
          <div className="cel sectionQuiz">
            <div className="inner sticky">
              <Quiz />
            </div>
          </div>
          <div className="cel sectionChecklist">
            <div className="inner">
              <Checklist />
            </div>
          </div>
          <div className="cel">
            <div className="inner">
              <div className="sticky sectionPlaylist">
                <Playlist />
            Bonjour sticky 2
            </div>
            </div>
          </div>
          <div className="cel ">
            <div className="inner">
            </div>
          </div>
          <div className="cel">
            <div className="inner">
            </div>
          </div>
          <div className="cel">
            <div className="inner">
              <Card />
            </div>
          </div>
          <div className="cel">
            <div className="inner">
            </div>

          </div>
        </div>
        <div className="gradientFX"></div>
      </div>

    </>
  );
}

export default App;
