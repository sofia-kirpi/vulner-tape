import Footer from "../components/Footer";
import Banner from "../components/main/Banner";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { getAll } from "../axios/description";
import Platform from "../components/main/Platform";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [descriptions, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll()
      .then((data) => {
        setDescription(data);
      })
      .catch(() => {
        alert("Error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <Banner />
        <div className="container mt-4">
          <div className="card border-dark mb-3">
            <div className="card-body">
              <h4 className="card-title">Features</h4>
              <p className="card-text">
                The scanner is currently best suited for scanning sites built
                with WordPress. However, even if your site is not built with
                WordPress, the scanner will perform a general check that is
                typical for most sites. Here is a list of its current features.
              </p>

              {loading && <Spinner />}
              {!loading &&
                descriptions.data.map((data, index) => (
                  <Platform
                    key={index}
                    data={data}
                    platformIndex={index}
                  ></Platform>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
