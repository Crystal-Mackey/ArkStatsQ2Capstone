import React from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import useAuth from "./hooks/useAuth";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";
import logo from "../src/assets/stegorock.gif";
import { signUp, logIn } from "./store/actions/users";
import { useDispatch } from "react-redux";

export default function App() {
  const auth = useAuth();
  const dispatch = useDispatch();

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  async function signUpNow() {
    try {
      const email = prompt("Enter your email");
      await dispatch(signUp(email));
      loginNow(email);
    } catch (err) {
      console.error(err);
    }
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    loginNow();
  };

  async function loginNow(email) {
    try {
      if (!email) {
        email = prompt("Enter your email");
      }
      dispatch(await logIn(email));
      await auth.login(email);
    } catch (err) {
      console.error(err);
    }
  }

  if (auth.loading || auth.loggingIn || auth.loggingOut) {
    return <img src={logo} alt="Loading......." />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} /> <Navigation />
          {auth.loggedIn ? (
            <div>
              You are logged-in.
              <br />
              <button onClick={() => auth.logout()}>Logout</button>
            </div>
          ) : (
              <>
                <div>
                  <button onClick={signUpNow}>Sign Up</button>
                </div>
                <div>
                  <button onClick={handleLogIn}>Login</button>
                </div>
              </>
            )}
        </div>
      </>
    </ThemeProvider>
  );
}

// export default App;
