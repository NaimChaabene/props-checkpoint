import React from 'react';
import './App.css';
import Profile from './profile/Profile'
import me from './me.jpg'


function App() {

  const handleName = (name) =>{
    //console.log(name);
    alert("I'm " + name );
}
  return (
    <div className="App">
     <Profile  fullName="Naim Chaabene" bio="hey im born in tunisia and i like traveling" profession="ingenieur"  clickme={handleName}>
      <img src={me} alt="" style={{borderRadius: "50%"}} />
      </Profile>
    </div>
  );
}

export default App;
