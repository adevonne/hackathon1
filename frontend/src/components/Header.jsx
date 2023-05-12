import logo from "@assets/condort.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex py-6 mb-2 bg-blue-700/90">
      <Link to="/">
        <img className="absolute w-20 h-20 top-0" src={logo} alt="hotels" />
      </Link>
      <h1 className="justify-center m-auto text-4xl text-white">Oukondort</h1>
    </div>
  );
}