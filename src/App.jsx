import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CarsPage from "./Components/CarsPage";
import TestDrivePage from "./Components/TestDrivePage";
import About from "./Components/About";
import Contacts from "./Components/Contacts";

function App() {
  const [page, setPage] =useState('home');
  return (
    <>
    <Header
      goHome={() => setPage('home')}
      goCars={() => setPage('cars')}
      goAbout={() => setPage('about')}
      goContacts={() => setPage('contacts')}
    />
    {page === 'home' && (
      <>
      <Hero
      goCars={() => setPage('cars')}
      goTestDrive={() => setPage('testDrive')}
      />
      </>
    )}
    {page === 'about' && (
      <About goHome={() => setPage('home')}/>
    )}
    {page === 'cars' && (
      <CarsPage
      goHome={() => setPage('home')}
      />
    )}
    {page === 'testDrive' && (
      <TestDrivePage
      goHome={() => setPage('home')}
      />
    )}
    {page === 'contacts' && (
      <Contacts goHome={() => setPage('home')} />)}
    </>
  )
}

export default App