import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { textSliceActions } from './store/textContentSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Solutions from './pages/Solutions.jsx';
import LeadVictor from './pages/LeadVictor.jsx';
import DigiCard from './pages/DigiCard.jsx';
import LMS from './pages/LMS.jsx';
import CargoTrackingSystem from './pages/CargoTrackingSystem.jsx';
import Kams from './pages/Kams.jsx';
import Qms from './pages/Qms.jsx';
import Ecommerce from './pages/Ecommerce.jsx';
import Testimonials from './pages/Testimonials.jsx';
import CurrentOpenings from './pages/CurrentOpenings.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import LifeThinkinno from './pages/LifeThinkinno.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('/content.json', {signal})
    .then(res => res.json())
    .then(result => {
      dispatch(textSliceActions.addInitialText(result));
    })
    .catch(err => {
      if (err.name !=='AbortError'){
        console.log(err);
      }
    })
    return ()=> {
      controller.abort();
    }
  }, []); 


  return (
    <>
    <div className='headerTopPadding'>
     <Header  /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/leadVictor' element={<LeadVictor/>} />
        <Route path='/digicard' element={<DigiCard/>} />
        <Route path='/lms' element={<LMS/>} />
        <Route path='/cargotrackingsystem' element={<CargoTrackingSystem/>} />
        <Route path='/kams' element={<Kams/>} />
        <Route path='/qms' element={<Qms/>} />
        <Route path='/ecommerce' element={<Ecommerce/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/case-studies'  element={<CaseStudies/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/lifeThinkinno' element={<LifeThinkinno/>} />
        <Route path='/contact' element={<Contact/>}  />
      </Routes> 
      
      <Footer />
      </div>
    </>
  );
}

export default App;
