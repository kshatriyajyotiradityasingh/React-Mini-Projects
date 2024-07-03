import { useState } from 'react';
import './App.css';
import Slide from './components/Slide';
import data from './Data';

function App() {

 


  return (
    <div className="App">
         <div>
          <h1>Our Testimonials</h1>
         </div>

         <div className='testimonial'>
          <Slide data={data}></Slide>
         </div>
    </div>
  );
}

export default App;
