import logo from "../assets/wyvern.gif";
import Links from "../components/navigation/Links";

export default function NotFound() {
  return (
    <>
      <Links />
      <div>
        <img src={logo} alt="You should leave" />
        <br />
        <h1>You Should Leave this place......</h1>
      </div>
    </>
  );
}

