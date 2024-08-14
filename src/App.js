import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import NavBar from "./components/layout/NavBar";
import PageFooter from "./components/layout/PageFooter";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass="minHeight">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <PageFooter />
    </Router>
  );
}

export default App;
