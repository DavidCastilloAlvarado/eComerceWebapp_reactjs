import React from "react";
import { Container, Navbar, Nav, Button, Row } from "react-bootstrap";
import { InfoIcon, ShopIcon, CallIcon } from "./Icons";
// import { Button, Navbar } from "react-bootstrap";

const contacto = {
  phone: "+51992347497",
  nombre: "Mi nombre propio",
  pagopaypal: "",
};

export const Navbarapp = () => {
  const { phone, nombre, pagopaypal } = contacto;
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/" style={{ color: "white" }}>
        <img
          alt=""
          src="/logo2.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        MiYogurt
      </Navbar.Brand>
      {/* <Navbar.Toggle
        aria-controls="basics-navbar-nav"
        style={{ background: "red" }} style={{ width: "100px" }}
      /> */}
      <Navbar id="basics-navbar-nav" className="navbar-expand-lg">
        <Nav className="ml-auto">
          <Nav.Link
            href={`https://api.whatsapp.com/send?phone=${phone}`}
            className="m-0.05"
          >
            <Button variant="warning" size="sm">
              <CallIcon size={"1em"} /> <> </>
            </Button>
          </Nav.Link>

          <Nav.Link href="/pay" className="m-0.05">
            <Button variant="danger" size="sm">
              <ShopIcon size={"1em"} /> <> </>
            </Button>
          </Nav.Link>

          {/* <Nav.Link
            href="https://www.youtube.com/watch?v=zBkVCpbNnkU"
            className="m-0.05"
          >
            <Button variant="success" size="sm">
              <BookIcon size={"1em"} /> <> </>
            </Button>
          </Nav.Link> */}

          <Nav.Link href="/info" className="m-0.05">
            <Button variant="info" size="sm">
              <InfoIcon size={"1em"} /> <> </>
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export const NavbarBottom = () => {
  const { phone, nombre, pagopaypal } = contacto;
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark" sticky="bottom">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo2.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Nutqutek
        </Navbar.Brand>
        <Nav className="ml-auto navbar-expand-lg">
          <Row className="text-white mb-1">
            <div>{nombre}</div>
          </Row>
          <Row>
            <a className="variant-dark ma-1 mb-1">992347497</a>
          </Row>
          <Row>
            <a className="variant-dark mb-1">dcastilloa@uni.pe</a>
          </Row>
        </Nav>
      </Navbar>
    </>
  );
};
