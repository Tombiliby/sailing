import React from "react";
import Checklist from "./components/checklist/checklist"
import SetColorScheme from "./components/setColorScheme"
import Quiz from "./components/quiz/Quiz"
import Playlist from "./components/playlist/Playlist"
import Card from "./components/Card"
import MainTitle from "./components/MaintTitle"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Pad from "./components/Pad"
import figureChecklist from "./figures/checklist.svg"

import checklists from "./data/checklists.json"


export default function App() {
  return (
    <Router>
      <div className="mainNav">
        <Link to="/">Home</Link>
        <Link to="/grid">Grid</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/grid">
          <Grid />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
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
              <div className="custom-shape-divider-top-1591970053">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
              </div>
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

function Grid() {
  return (
    <>
      <div className="mainGrid">
        <div className="sideBar">
          <div className="inner">
            <h2>Sidebar</h2>
          </div>
        </div>
        <div className="bodyGrid">
          <div className="col megaList1">
            <div className="inner">
              <Pad title={checklists.material.title} figure={figureChecklist}>
                <Checklist data={checklists.material} />
              </Pad>
            </div>
          </div>
          <div className="col">
            <div className="inner">
              <Pad title={checklists.checkup.title}>
                <Checklist data={checklists.checkup} />
              </Pad>
            </div>
          </div>
          <div className="col">
          </div>
          <div className="col full fullDisplay">
            <div className="inner">
              <Quiz />
            </div>
          </div>
          <div className="col">
          </div>
          <div className="col mediumList2">
          </div>
          <div className="col megaList2">
          </div>
        </div>
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="gridTest">
        <div className="superHeight">
          Super height
        </div>

        <div className="roger">
          <div className="stickyBottom">
            Sticky bottom
          </div>
        </div>
      </div>

    </div>
  );
}

/*
function App() {
  return (

  );
}

export default App;
*/