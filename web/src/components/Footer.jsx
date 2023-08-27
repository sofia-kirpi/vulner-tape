const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="text-center p-3">
        <a className="text-white" href="/" style={{textDecoration: "none"}}>
          © {new Date().getFullYear()} VulnerTape
        </a>
      </div>
    </footer>
  );
};

export default Footer;
