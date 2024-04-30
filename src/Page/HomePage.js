import { useAuth0 } from "@auth0/auth0-react"

export const HomePage=()=>{
    const {loginWithRedirect}=useAuth0();
    return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"} }>
        
        <strong>Welcome to Elysium Gate</strong>
        <br/>
        <br/><br/><br/><br/><br/>   
        <button onClick={async()=>await loginWithRedirect()} style={{background:"red"}}>Login</button>
    </div>
    )
}