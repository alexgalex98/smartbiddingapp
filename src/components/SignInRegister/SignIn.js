import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const SignIn= ({email, password, onEmailChange, setPassword,onSubmit})=> {
       console.log("ema",email)
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        onChange={(e) => onEmailChange(e.target.value)}
                        
                      />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </fieldset>
                  <div className="">
                    <input
                      onClick={onSubmit}
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Sign in"
                    />
                  </div>
                  <div className="lh-copy mt3">
                    {/* {} LINK REGISTER  */}
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              </main>
            </article>
        )
    
}

export default SignIn;