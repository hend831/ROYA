import React, { useState } from 'react';
import './navbarr.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Logo from '../../../assets/images/logo.png';
import Global from '../../../assets/images/global-bulk.png';

const Navbarr = () => {
  const [changeColor, setChangeColor] = useState(false);

  const handleColorChange = () => setChangeColor(true);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" title="logo" />
          </Navbar.Brand>
          <Navbar.Toggle className={changeColor ? 'changecolor' : ''}
                onClick={handleColorChange} aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={changeColor ? 'changecolor' : ''}
                onClick={handleColorChange}
              >
                الصفحة الرئيسية
              </Nav.Link>
              {[{ label: 'من نحن' }, { label: 'خدمتنا' }, { label: 'منتجات اوركا' }, { label: 'أعمالنا' }, { label: 'تواصل معنا' }].map((item, index) => (
                <Nav.Link href="#link" key={index}>{item.label}</Nav.Link>
              ))}
            </Nav>
            <Nav>
              <Nav.Link href="#home">EN <img src={Global} alt="language" title="language" /></Nav.Link>
              {[{ label: 'الدخول', className: 'btn1 btnn' }, { label: 'منطقة العميل', className: 'btn2 btnn' }].map((item, index) => (
                <Nav.Link href="#home" key={index}><Button className={item.className}>{item.label}</Button></Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
