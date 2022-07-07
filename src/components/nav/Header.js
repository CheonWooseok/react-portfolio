import { Container, Nav, Navbar } from "react-bootstrap";
import { House, Person, Phone } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  li {
    margin: 5px;
  }
`;

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" style={{ height: "80px" }}>
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand style={{ fontSize: "30px", letterSpacing: "2px " }}>
              Rightsn.
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="home">
              <HeaderItem>
                <House /> <li>Home</li>
              </HeaderItem>
            </Nav.Link>
            <Nav.Link as={Link} to="aboutme">
              <HeaderItem>
                <Person /> <li>About Me</li>
              </HeaderItem>
            </Nav.Link>
            <Nav.Link as={Link} to="contact">
              <HeaderItem>
                <Phone />
                <li>Contact Me</li>
              </HeaderItem>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
