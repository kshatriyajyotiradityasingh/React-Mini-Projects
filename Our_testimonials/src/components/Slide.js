import React from "react";
import { useState } from "react";
import './Slide.css'

const Slide= ({data})=>{
  const [index,setIndex]= useState(0);
  const [read,Setread]=useState(true);

  const desp= read ? data[index].info.substr(0,200)+'...' : data[index].info;

  function left(){
    if(index===0)
    setIndex(data.length-1);
    else
    setIndex(index-1);
   
  }

  function right(){
    if(index===data.length-1)
    setIndex(0);
    else
    setIndex(index+1);
    
  }

  function readmore(){
    Setread(!read);
  }
  

  function random(){

    setIndex(Math.floor(Math.random()*data.length));
    
  }
  return (
    <div className="Slide">

    <img className="img" src={data[index].image}/>

    <div >
      <label className="heading"> {data[index].name}</label>
      <label className="heading">{data[index].price}</label>
    </div>
      
    

    <div>
      <p className="info">{desp}<span onClick={readmore} style={{ fontWeight: 'bold' ,color:'bule'}}
>{read ? 'Read-More' : 'Show-Less'}</span></p>

    </div>
 
     <div>
     <button className="button-17" onClick={left}>{'<'}</button>
     <button className="button-17" onClick={right}>{'>'}</button>
     </div>
    
    <button className="button-17" onClick={random}>Random</button>


    </div>
  )
}

export default Slide;