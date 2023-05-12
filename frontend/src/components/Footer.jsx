import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-300 bottom-0 flex justify-between w-[100%] fixed b-0">
        <p className="ml-4 flex">© Oukondor-2023</p>
        <ul className="flex text-xl">
          <li className="mr-3">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
