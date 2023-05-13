import {React,useState} from 'react'
import './navbarr.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from '../../../assets/images/logo.png'
import Global from '../../../assets/images/global-bulk.png'



 const Navbarr = () => {
  const [changecolor ,setchangecolor] =useState(false);
  const handlchangecolor =() => {
    setchangecolor(true)
  };
  return (

    <div>
   
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt='logo image' title='logo image'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="#home" className={changecolor ? 'changecolor' : ''}

                onClick={handlchangecolor}>الصفحة الرئيسية</Nav.Link>
                
            <Nav.Link href="#link" className= {changecolor ? "changecolor" : ""} onClick={handlchangecolor}>من نحن</Nav.Link>
            <Nav.Link href="#home">خدمتنا</Nav.Link>
            <Nav.Link href="#link">منتجات اوركا</Nav.Link>
            <Nav.Link href="#home">أعمالنا</Nav.Link>
            <Nav.Link href="#link">تواصل معنا</Nav.Link>
           
          </Nav>
          <Nav>
                <Nav.Link href="#home" >EN <img src={Global} alt='image' title='language'/></Nav.Link>
                <Nav.Link href="#home"  > <Button className="btn1 btnn">الدخول</Button></Nav.Link>
                <Nav.Link href="#home"  > <Button className="btn2 btnn">منطقة العميل</Button></Nav.Link>
                
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr
