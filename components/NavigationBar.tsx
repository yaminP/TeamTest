import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function NavigationBar(): JSX.Element {
  const { asPath } = useRouter();
  const [navbarTop, setNavbarTop] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const bodyScroll = document.body.scrollTop;
    const elementScroll = document.documentElement.scrollTop;
    if (bodyScroll > 20 || elementScroll > 20) {
      setNavbarTop(true);
    } else {
      setNavbarTop(false);
    }
  };
  return (
    <div id="sticky-wrapper" className="sticky-wrapper" >
      <Navbar expand="lg" className={navbarTop ? 'fixed-top' : ''}>
        <Container>
          <Navbar.Brand href="/">T Active Stevia</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto me-lg-5 align-items-center f-s-bitter">
              <Link href="/" className={asPath === "/" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Home
              </Link>
              <Link href="/products" className={asPath === "/product" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Product
              </Link>
              <Link href="/about" className={asPath === "/about" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                About
              </Link>
              <Link href="/blog" className={asPath === "/blog" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Blogs
              </Link>
              <Link href="/event" className={asPath === "/event" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Events
              </Link>
              <Link href="/contact" className={asPath === "/contact" ? "nav-link click-scroll active" : "nav-link click-scroll"}>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
