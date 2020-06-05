import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PersonList =()=>{
return(
  <section className="person-list">
  <Person img="22" name="hamza" job="designer"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p></Person>
    <Person img="75" name="ali" job="developer"/>

  <Person img="65" name="ahmed" job="UX/UI"/>

  </section>
)
}


const Person=({img,job,name,children})=>{
  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <article className="person">
    <img src={url} alt="Person Image"/>
    <h4>{name}</h4>
    <p>{job}</p>
    {children}
   
    </article>
  )
}



ReactDOM.render(<PersonList></PersonList>,document.getElementById('root'));
