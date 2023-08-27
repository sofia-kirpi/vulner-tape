const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          VulnerTape
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/scanner">
              Scanner
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;