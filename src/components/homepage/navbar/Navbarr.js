import "./navbarr.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Logo from "../../../assets/images/logo.png";
import Global from "../../../assets/images/global-bulk.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from "../../about/About";
import Header from "../header/Header";
import Services from "../../Services/Services";

const Navbarr = () => {
  return (
    <Router>
      <div>
        <Navbar expand="lg" className="naav">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} alt="logo" title="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to={"/"}>
                  الصفحة الرئيسية
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/about"}>
                  من نحن
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/services"}>
                  خدمتنا
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/home"}>
                  منتجات اوركا
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/home"}>
                  أعمالنا
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/home"}>
                  تواصل معنا
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={NavLink} to={"/home"}>
                  EN <img src={Global} alt="language" title="language" />
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/home"}>
                  <Button className="btn1 btnn">الدخول</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to={"/home"}>
                  <Button className=" btnn">منطقة العميل</Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Header />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbarr;
