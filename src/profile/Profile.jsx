import React from 'react';
import PropTypes from "prop-types";


const Profile =({children,fullName="john Sina",profession ="Actor",bio="ffffffff", clickme})=>{

   
  return(
      <div>         
          {children}
          <h1 style = {{color: "blue", textTransform: "uppercase"}}>{fullName}</h1>
          <h2>{profession}</h2>
          <p>{bio}</p>
          <br />
            <button onClick={(e)=>{clickme(fullName)}}  style={{padding :"10px",margin:"20px", fontSize: "20px"}}>About me</button>
      </div>
  )

}

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    clickme: PropTypes.func,   
    children: PropTypes.element.isRequired                                       // ...prop type definitions here
   };

export default Profile;