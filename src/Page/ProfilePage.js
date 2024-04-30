import { useAuth0 } from "@auth0/auth0-react";

export const ProfilePage=()=>{
       const {user}=useAuth0();
       console.log(user);
       return(
       <div>
       {user.name} {user.email}
       <br/>
       <img src={`${user.picture}`}/>
       </div>
       )
}