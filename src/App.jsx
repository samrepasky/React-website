import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes,
Route} from 'react-router-dom';
import Home  from './pages/Home';
import "@fontsource/inter";
import Contact from './pages/Contact';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import Project4 from './pages/project4';
import Project5 from './pages/project5';
import Project6 from './pages/project6';
import About from './pages/about';

function App() {
  return (
    <>
      <Router> 
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/project1' element={<Project1 />}/>
          <Route path='/project2' element={<Project2 />}/>
          <Route path='/project3' element={<Project3 />}/>
          <Route path='/project4' element={<Project4 />}/>
          <Route path='/project5' element={<Project5 />}/>
          <Route path='/project6' element={<Project6 />}/>
          <Route path='/aboutThisWebsite' element={<About/>}/>

        </Routes>
      </Router>
      
    </>
  );
}

export default App;

