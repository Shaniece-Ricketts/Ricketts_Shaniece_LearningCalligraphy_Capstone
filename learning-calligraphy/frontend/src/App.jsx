import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CollectionOne from './components/collectionOne';
import CollectionTwo from './components/collectionTwo';
import CollectionThree from './components/collectionThree';
import NewVideoForm from './pages/newVideoForm';
import RegisterForm from './pages/register';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar /> {/* Navbar is now included once here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collectionone" element={<CollectionOne />} />
          <Route path="/collectiontwo" element={<CollectionTwo />} />
          <Route path="/collectionthree" element={<CollectionThree />} />
          <Route path="/newvideo" element={<NewVideoForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
      <footer>&copy; Copyright 2024</footer>
    </Router>
  );
}

export default App;
