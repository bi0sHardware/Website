import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Footer, Navbar } from "./components";
import Home from "./Home";
import Team from "./Team";
import React, {useEffect} from "react";
import ScrollToTop from "../ScrollToTop";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary w-full overflow-hidden">
          <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>

            <div
              className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
            >
              <div className={`${styles.boxWidth}`}>
                <ScrollToTop />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/team" element={<Team />} />
                  <Route path='/join-us' element={<RedirectToForms />} />
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

const RedirectToForms = () => {
  useEffect(() => {
    window.location.href = "https://forms.gle/nfEkKCeVb5hjT8sHA";
  }, [])
  return null;
}