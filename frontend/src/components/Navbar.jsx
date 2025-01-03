import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between p-5 bg-teal-950 fixed top-0 h-24  items-center">
        <Link to="/">
          <img
            src="https://img.freepik.com/premium-vector/number-69-logo-monogram-number-69-logo-line-style-usable-anniversary-business-logos_602671-1291.jpg"
            className="h-12 md:h-16 rounded-xl"
            alt=""
          />
        </Link>

        <Link
          to="/login"
          className="font-semibold text-red-500 md:text-xl bg-white p-3  rounded-xl text-xs m-0 hover:bg-red-500 hover:text-white"
        >
          Logout
        </Link>
      </div>
    </>
  );
}

export default Navbar;
