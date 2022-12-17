import { useReducer } from "react";
import "./login.css";
export default function Login() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "s-name":
        return { ...state, name: payload };
      case "s-email":
        return { ...state, email: payload };
      case "s-pass":
        return { ...state, password: payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label htmlFor="tab-1" className="tab">
            Log In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                action="http://localhost:8080/login"
                method="post"
              >
                <div className="group">
                  <label htmlFor="user" className="label">
                    email
                  </label>
                  <input id="user" type="text" className="input" />
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <input id="check" type="checkbox" className="check" />
                  <label for="check">
                    <span className="icon"></span> Keep me Signed in
                  </label>
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
              </form>

              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>

            {/* sign up begin */}
            {/* sign up begin */}
            {/* sign up begin */}

            <div className="sign-up-htm">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="http://localhost:8080/signup"
                method="post"
              >
                <div className="group">
                  <label for="user" className="label">
                    Username
                  </label>
                  <input
                  value={state.name}
                    onChange={(e) => {
                      dispatch({ type: "s-name", payload: e.target.value });
                    }}
                    name="user"
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="label">
                    Email Address
                  </label>
                  <input
                  value={state.email}
                    onChange={(e) => {
                      dispatch({ type: "s-email", payload: e.target.value });
                    }}
                    name="email"
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label
                    onChange={(e) => {
                      dispatch({ type: "s-pass", payload: e.target.value });
                    }}
                    for="pass"
                    className="label"
                  >
                    Password
                  </label>
                  <input
                  value={state.password}
                    name="pass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>

                <div className="group">
                  <input
                    onClick={() => console.log(state)}
                    type="submit"
                    className="button"
                    value="Sign Up"
                  />
                </div>
              </form>

              <div className="hr"></div>
              <div className="foot-lnk">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// https://troubled-slip-lion.cyclic.app/
