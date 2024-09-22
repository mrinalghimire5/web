import React from 'react';
import { Home,Faq} from './pages';
import './App.css'
import { Header,Footer } from './components';
import {  Route, Routes } from 'react-router-dom';

// Main App Component
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/faqs" element={<Faq />}/>
    </Routes>
    <Footer/>
    </>
  );
}


export default App;

