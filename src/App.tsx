import React from "react"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import ThemeProvider, { useTheme } from "./@context/theme"

import AboutPage from "./About";
import BlogPage from "./Blog";
import ContactPage from "./Contact";
import HomePage from "./Home";
import PortfolioPage from "./Portfolio";

import './@styles/styles.css';
import './App.css';
import TogglePopupsProvider from "./@context/togglePopups";

function App() {

  const { colorTheme } = useTheme();

  return (
      <TogglePopupsProvider>
        <ThemeProvider>
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
        </ThemeProvider>
      </TogglePopupsProvider>
  );
}

export default App;
