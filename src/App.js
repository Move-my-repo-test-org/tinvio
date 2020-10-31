import React from 'react';
import './App.css';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import PreviewSection from './components/Preview';
import Communication from './components/Communication';
import Ordering from './components/Ordering';
import Steps from './components/Steps';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopBanner/>
      <PreviewSection/>
      <Communication />
      <Ordering />
      <Steps />
    </div>
  );
}

export default App;
