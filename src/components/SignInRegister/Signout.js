import SignInSmart from "./SignInSmart"

const Signout = ()=>{
   localStorage.clear()
   return(
       <div>
        <SignInSmart></SignInSmart>
       </div>
   )
}
export default Signout