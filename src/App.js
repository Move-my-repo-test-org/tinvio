import React from 'react';
import './App.css';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import PreviewSection from './components/Preview';
import Communication from './components/Communication';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopBanner/>
      <PreviewSection/>
      <Communication />
    </div>
  );
}

export default App;
