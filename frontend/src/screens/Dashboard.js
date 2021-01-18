import logo from "../assets/A.gif";

import Links from "../components/navigation/Links";

export default function Dashboard() {
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
