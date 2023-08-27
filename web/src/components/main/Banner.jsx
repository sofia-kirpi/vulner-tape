const Banner = () => {
  return (
    <div
      className="jumbotron text-center text-light"
    >
      <h1 className="display-4">Welcome!</h1>
      <p className="lead">
        We will help you identify the weaknesses of your site.
      </p>
      <a
        className="btn btn-outline-light btn-lg"
        href="/scanner"
        role="button"
      >
        <code>start scanning</code>
      </a>
    </div>
  );
};

export default Banner;
