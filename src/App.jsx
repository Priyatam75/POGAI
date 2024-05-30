import styles from "./style";
import { Navbar, Hero, Business, CTA, Footer,Stats,Testimonials,CardDeal,ChooseCard, Clients } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
            <Route path="/" element={<Business />} />
            <Route path="/" element={<CTA />} />
            <Route path="/" element={<Footer />} />
            </Routes>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
            <Route path="/" element={<CTA />} />
            </Routes>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
            <Route path="/" element={<CardDeal />} />
            </Routes>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
            <Route path="/" element={<ChooseCard />} />
            </Routes>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
            <Route path="/" element={<Footer />} />
            </Routes>
          </div>
        </div>
      </div>
      
      <Routes>
        <Route exact path="/inputpage" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
