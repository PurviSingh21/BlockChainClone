import { useAuth0 } from "@auth0/auth0-react"

export const HomePage=()=>{
    const {loginWithRedirect}=useAuth0();
    return(
    <div>
        
        Welcome to Elysium Gate, Please Login
        <p>Hello!!!!</p>
        <button onClick={async()=>await loginWithRedirect()} style={{background:"red"}}>Login</button>
    </div>
    )
}