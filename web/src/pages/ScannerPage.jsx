import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { send } from "../axios/scanner";
import Spinner from "../components/Spinner";
import ScanButton from "../components/buttons/ScanButton";
import BigCard from "../components/result/BigCard";
import PDFButton from "../components/buttons/PDFButton";
import { getCardColor } from "../helpers/color";
const URL_REGEX = /https?:\/\//;

const ScannerPage = () => {
  const [url, setURL] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const [validURL, setValidURL] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [disabledInput, setDisabledInput] = useState(false);
  const [disabledPDF, setDisabledPDF] = useState(false);
  const styleClass = validURL ? "is-valid" : "is-invalid";

  const changedURL = async (e) => setURL(e.target.value);

  useEffect(() => {
    setValidURL(URL_REGEX.test(url));
    setDisabled(!URL_REGEX.test(url));
    setDisabledPDF(true);
  }, [url]);

  const click = async () => {
    setDisabled(true);
    setLoading(true);
    setDisabledInput(true);
    setError("");
    setResult(null);
    const data = await send(url);
    setDisabled(false);
    setLoading(false);
    setDisabledInput(false);
    setDisabledPDF(false);
    if (typeof data === "string") {
      setError(data);
    } else {
      setResult(data);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={
          result
            ? { height: "100%", marginBottom: "40px" }
            : { height: "1000px", marginBottom: "40px" }
        }
      >
        <h1 className="mt-4" style={{ textAlign: "center" }}>
          Scanner
        </h1>
        <div className="page-header d-flex justify-content-center">
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                style={{ width: "400px" }}
                className={`form-control ${styleClass}`}
                value={url}
                onChange={changedURL}
                placeholder="https://example.com"
                disabled={disabledInput}
              />
              <ScanButton onClick={click} disabled={disabled} />
              <PDFButton disabled={disabledPDF} />
            </div>
          </form>
        </div>
        {Boolean(error) && (
          <p className="text-danger mt-4" style={{ textAlign: "center" }}>
            {error}
          </p>
        )}
        {loading && <Spinner />}
        {result && (
          <div>
            <div id="content">
              <div className={getCardColor() + " card text-white bg-primary mt-5"}>
                <div className="card-body">
                  <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">
                      URL:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        readonly=""
                        className="form-control-plaintext"
                        id="staticEmail"
                        value={url}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {result.data.map((platform, index) => (
                <BigCard key={index} platform={platform}></BigCard>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ScannerPage;
