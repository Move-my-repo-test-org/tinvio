import React from 'react';
import './App.css';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import PreviewSection from './components/Preview';
import Communication from './components/Communication';
import Ordering from './components/Ordering';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopBanner/>
      <PreviewSection/>
      <Communication />
      <Ordering />
    </div>
  );
}

export default App;
