import { useAuth0 } from "@auth0/auth0-react"

export const HomePage=()=>{
    const {loginWithRedirect}=useAuth0();
    return(
    <div style={{display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height: "450px" ,
        maxWidth: "560px",  
        borderStyle: "solid",
        backgroundImage: "linear-gradient(45deg, var(--clr-dark-blue) 10%, var(--clr-light-blue) 20%, var(--clr-dark-blue) 50%, var(--clr-light-blue) 120%)",
        position: "relative",
        top: "150px",
        left: "450px",
        borderRadius: "25px",
        color: "white",
        fontFamily: "Poiret One",
        fontSize: "1.60em",
        fontWeight: "bold"} }>
        <h1> ELYSIUM GATE: NFTs for Event Prefection</h1>
        <br/>
        <strong>Welcome to Elysium Gate</strong>
        <br/>
        <br/> 
        <button onClick={async()=>await loginWithRedirect()} style={{fontSize: "25px", backgroundColor: "#e7e7e7",border:"solid", borderRadius: "8px", padding: "8px 15px", color:"black", fontWeight: "bold"}}>Login</button>
    </div>
    )
}