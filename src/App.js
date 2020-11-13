import React from 'react';
import './App.css';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import PreviewSection from './components/Preview';
import Communication from './components/Communication';
import Ordering from './components/Ordering';
import Steps from './components/Steps';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="dots"></div>
      <Header/>
      <main className="main-content">
        <TopBanner/>
        <PreviewSection/>
        <Communication />
        <Ordering />
        <Steps />
        <GetStarted />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
