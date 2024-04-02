import logo from "./logo.png";

function Nav() {
  return (
    <div className="flex-auto flex-row justify-between bg-green-400">
      <img src={logo} alt="" className="w-1/4 " />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
