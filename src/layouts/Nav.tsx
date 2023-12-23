import { Link } from "react-router-dom";
import { FaHome, FaShoePrints, FaInfoCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="bg-gray-900 py-4 rounded-lg">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 flex-row flex gap-2 items-center"
          >
            <FaHome className="text-gray-400" /> Beranda
          </Link>
        </li>
        <li>
          <Link
            to="/tambah-sepatu"
            className="text-white hover:text-gray-300 flex-row flex gap-2 items-center"
          >
            <FaShoePrints className="text-gray-400" /> Tambah Sepatu
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 flex-row flex gap-2 items-center"
          >
            <FaInfoCircle className="text-gray-400" /> Tentang
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
