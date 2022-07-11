import { ClickAwayListener } from "@mui/material";
import { useState } from "react";
import { Collapse, Container, Nav, Navbar } from "react-bootstrap";
import {
  Code,
  Envelope,
  House,
  List,
  Person,
  XSquare,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
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
  display: flex;
  align-items: center;
  height: 80px;
  &:hover {
    cursor: pointer;
  }
`;

const CustomCard = styled.div`
  color: #fff;
  width: 100%;
  /* height: 40vh; */
  position: absolute;
  background-color: #333;
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); */
`;

const MENUS = [
  { name: "Home", link: "", icon: <House /> },
  { name: "About Me", link: "aboutme", icon: <Person /> },
  { name: "Project", link: "project", icon: <Code /> },
  { name: "Contact", link: "contact", icon: <Envelope /> },
];

export default function Header() {
  const { media } = useMedia();

  console.log("init");

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
          {media !== "mobile" ? (
            <Nav>
              {MENUS.map((menu) => (
                <Nav.Link as={Link} to={menu.link} key={menu.name}>
                  <HeaderItem>
                    {menu.icon}
                    <li>{menu.name}</li>
                  </HeaderItem>
                </Nav.Link>
              ))}
            </Nav>
          ) : (
            <MobileBar />
          )}
        </Container>
      </CustomNavBar>
    </>
  );
}

const MobileBar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Nav>
        <Nav.Item>
          <MobileMenuButton onClick={() => setOpen((prev) => !prev)}>
            <XSquare
              color="white"
              fontSize="30px"
              style={{
                position: "fixed",

                transition: "transform .5s",
                transform: `scale(${!open ? 0 : -100}%)`,
              }}
            />
            <List
              color="white"
              fontSize="35px"
              style={{
                // zIndex: open ? "-1000" : "1000",
                transition: "transform .5s",
                transform: `scale(${open ? 0 : -100}%)`,
              }}
            />
          </MobileMenuButton>
          <Collapse in={open} dimension="height">
            <div
              id="example-collapse-text"
              style={{
                position: "fixed",
                zIndex: "9999",
                left: "0",
                width: "100%",
                background: "#333",
              }}
            >
              <>
                {MENUS.map((menu) => (
                  <Nav.Link
                    onClick={() => onNavigate(menu.link)}
                    style={{ width: "100%" }}
                    type={menu.link}
                  >
                    <HeaderItem
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {menu.icon}
                      <li>{menu.name}</li>
                    </HeaderItem>
                  </Nav.Link>
                ))}
              </>
            </div>
          </Collapse>
        </Nav.Item>
      </Nav>
    </ClickAwayListener>
  );
};
