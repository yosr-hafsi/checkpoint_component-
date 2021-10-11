import React from "react";
import myPhoto from "./myPhoto.jpg";
const ProfilePhoto = () => {
 return (
   <>
     <div style={{ display:"flex", justifyContent: "center" }} >
       <h1 className="ProfilePhoto" style={{ fontSize:'50px', color:"red" }}>ProfilePhoto</h1>
       <br/>
       <img src={myPhoto} alt ='myPhoto' />
      </div>
   </>
 );
};
export default ProfilePhoto;