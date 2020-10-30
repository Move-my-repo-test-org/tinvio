import React from 'react';
import './App.css';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import PreviewSection from './components/Preview';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopBanner/>
      <PreviewSection/>
    </div>
  );
}

export default App;
