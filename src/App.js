import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogsList from "./components/BlogsList";

function App() {
  return (
    <div>
      <Router>

        <Route exact path="/">
          <Banner />
          <Navbar />
          <BlogsList />
        </Route>

        <Route exact path="/about">
          <Banner />
          <Navbar />
          <About />
        </Route>

        <Route exact path="/contact">
          <Banner />
          <Navbar />
          <Contact />
        </Route>

      </Router>
    </div>
  );
}

export default App;
