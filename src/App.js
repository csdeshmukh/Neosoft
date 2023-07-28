import "./App.css";
import Header from "./components/Header";
import "./bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingPage></LandingPage>
      <main style={{ minHeight: "93vh" }}></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
