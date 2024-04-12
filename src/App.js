import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const setProg = (progress) => {
    setProgress(progress);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar color="#f11946" height={1} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="home"
                pageSize={10}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="business"
                pageSize={10}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="entertainment"
                pageSize={10}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="general"
                pageSize={10}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="health"
                pageSize={10}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="science"
                pageSize={10}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="sports"
                pageSize={10}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProg}
                apiKey={apiKey}
                key="technology"
                pageSize={10}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
