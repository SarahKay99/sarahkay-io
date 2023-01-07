import React from "react"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


import AboutPage from "./About";
import BlogPage from "./Blog";
import ContactPage from "./Contact";
import HomePage from "./Home";
import PortfolioPage from "./Portfolio";

import './@styles/styles.css';
import './App.css';
import TogglePopupsProvider from "./@context/togglePopups";
import SettingsProvider, { useSettings } from "./@context/settings";

function App() {

  const { colorTheme } = useSettings();

  return (
      <TogglePopupsProvider>
        <SettingsProvider>
        <Router>
          <div className={`App ${colorTheme}`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </div>
        </Router>
        </SettingsProvider>
      </TogglePopupsProvider>
  );
}

export default App;
