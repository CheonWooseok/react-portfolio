import { useState } from "react";
import { Card, Collapse, Container, Nav, Navbar } from "react-bootstrap";
import { Code, Envelope, House, List, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import manImage from "../../assets/image/man.png";
import useMedia from "../../utils/hooks/useMedia";

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  li {
    margin: 5px;
  }
`;

const CustomNavBar = styled(Navbar)`
  height: 80px;
  &:before {
    width: 100%;
    height: 80px;
    /* background-color: #000; */
    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    );
    position: fixed;
    z-index: -1;
    content: "";
    /* opacity: 0.5; */
    /* filter: darken(10%); */
  }
`;

const MobileMenuButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default function Header() {
  const { media } = useMedia();

  const [open, setOpen] = useState(false);

  return (
    <>
      <CustomNavBar bg="none" variant="dark" fixed="top">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand
              as={Link}
              to=""
              style={{
                fontSize: "30px",
                letterSpacing: "2px",
                color: "#EEEEEE",
              }}
            >
              <img src={manImage} style={{ width: "50px", margin: "10px" }} />
              Rightsn
            </Navbar.Brand>
          </Nav>
          {media === "pc" ? (
            <Nav>
              <Nav.Link as={Link} to="">
                <HeaderItem>
                  <House /> <li>Home</li>
                </HeaderItem>
              </Nav.Link>
              <Nav.Link as={Link} to="aboutme">
                <HeaderItem>
                  <Person /> <li>About Me</li>
                </HeaderItem>
              </Nav.Link>
              <Nav.Link as={Link} to="project">
                <HeaderItem>
                  <Code /> <li>Projects</li>
                </HeaderItem>
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                <HeaderItem>
                  <Envelope />
                  <li>Contact</li>
                </HeaderItem>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Item>
                <MobileMenuButton onClick={() => setOpen((prev) => !prev)}>
                  <List color="white" fontSize="30px" />
                </MobileMenuButton>
                <Collapse in={open} dimension="height">
                  <div
                    id="example-collapse-text"
                    style={{ position: "fixed", zIndex: "9999", left: "0" }}
                  >
                    <Card body style={{ width: "400px" }}>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </Card>
                  </div>
                </Collapse>
              </Nav.Item>
            </Nav>
          )}
        </Container>
      </CustomNavBar>
    </>
  );
}
