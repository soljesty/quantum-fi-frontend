import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import CustomImage from '../../CustomImage';
import { BRAND_IAMGE } from '../../../../constants/image.constants';


const NavbarBrand = styled(Navbar.Brand)`
  line-height: 130%;
  font-size: 35px;
  display: flex;
  align-items: center;
  color: #FEBC00;
  
  span:nth-child(2){
    color: #00BCFE;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px
  }
`

const LaunchButton = styled.div`
  background: linear-gradient(#3136B0, #3136B0) padding-box,
              linear-gradient(to right, #FFCD1B, #E26C00) border-box;
  border-radius: 53px;
  border: 3px solid transparent;
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3a310;
  font-size: 20px;
  font-weight: bold;
  line-height: 100%;
  cursor: pointer;
  &:hover{
    scale: 1.1;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

const NavLink = styled(Nav.Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 18px 0;
  &:hover{
    color: #FA931B;
    &:after{
      content: '';
      display: block;
      position: relative;
      width: 70%;
      /* border: 2px solid #898989; */
      border-bottom: 3.45px solid transparent;
      border-image: linear-gradient(0.25turn, #FFCD1B, #E26C00);
      border-image-slice: 1;
    }
  }
  
  div{
    border-bottom: 2px solid #0004ff;
    position: absolute;
    left: 50%;
    bottom: 0;
  }
  @media screen and (max-width: 768px) {
    color: white;
    &:hover{
      &:after{
        width: 30%;
      }
    }
  }
`

const NavContainer = styled(Container)`
  max-width: 1516px;
  width: 100%;
`

const NavbarToggle = styled(Navbar.Toggle)`
  /* background-color: white; */
  border: none;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

const OffCanvasBody = styled(Offcanvas.Body)`

`

const NavbarOffcanvas = styled(Navbar.Offcanvas)`
  @media screen and (max-width: 768px) {
    background-color: #020327;
  }
`

const OffcanvasHeader = styled(Offcanvas.Header)`
  .btn-close{
    --bs-btn-close-bg: url('/assets/images/white-close.svg')
  }
`

const NavWrapper = styled(Navbar)`
  .navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
    color: white;
  }
  .navbar-toggler-icon{
    width: 42px;
    height: 28px;
    background-image: url('/assets/images/menu.svg');
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

function Header() {
  return (
    <>
      {['lg'].map((expand) => (
        <NavWrapper key={expand} expand={expand} className="p-4 align-items-center">
          <NavContainer fluid>
            <NavbarBrand href="#">
              <CustomImage
                image={BRAND_IAMGE}
                smWidth='24px'
                smHeight='24px'
              />
              <span>&nbsp;Quan</span><span>tum</span>
            </NavbarBrand>
            <NavbarToggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <NavbarOffcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <OffcanvasHeader closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* Offcanvas */}
                </Offcanvas.Title>
              </OffcanvasHeader>
              <OffCanvasBody>
                <Nav className="justify-content-center flex-grow-1 pe-3 gap-2">
                  <NavLink>
                    Home
                  </NavLink>
                  <NavLink href='https://quantumfi.gitbook.io/quantumfi/' target="__blank">Whitepaper</NavLink>
                  <NavLink>Contact Us</NavLink>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  <LaunchButton>
                    Launch App
                  </LaunchButton>
                </Form>
              </OffCanvasBody>
            </NavbarOffcanvas>
          </NavContainer>
        </NavWrapper>
      ))}
    </>
  );
}

export default Header;