import logo from "./logo.png";

function Nav() {
  return (
    <div className="flex flex-row justify-between bg-green-400 items-center	">
      <img src={logo} alt="" className="min-w-10 max-w-32 -m-4" />
      <nav>
        <ul className="items-center flex flex-row">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
