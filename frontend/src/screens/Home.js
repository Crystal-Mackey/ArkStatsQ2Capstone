import Links from "../components/navigation/Links";
import logo from "../assets/A.gif";

export default function Home() {
  return (
    <>
      <Links />
      <div>
        <img src={logo} alt="Ark A" />
        <br />
        <h1>Welcome Home</h1>
      </div>
    </>
  );
}
