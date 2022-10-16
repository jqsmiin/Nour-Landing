import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.webp'

function NavScroll() {
    const [scroll, setScroll] = useState(false)
    const links = ['Home', 'About', 'Services', 'Case Study', 'Blog', 'Contact']

    const setNavbar = () => {
        //console.log(window.scrollY)
        if (window.scrollY > 25) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    const handleClick = (e) => {
        if (e.target.className === 'navbar-toggler-icon') {
            const el = e.target.parentElement.parentElement.parentElement.nextSibling.childNodes[0].childNodes[0].childNodes[1].childNodes[0]
            const display = window.getComputedStyle(el).display;
            console.log(display)
            if (display === 'block') {
                el.style.display = 'none'
            } else if (el.style.display === 'none') {
                el.style.display = 'block'
            }
        }
    }

    window.addEventListener('scroll', setNavbar)
    return (
        <Navbar expand="lg" id='nav' className={scroll ? 'nav-scroll' : ''}>
            <Container fluid className='content-container' onClick={handleClick}>
                <Navbar.Brand href="#">
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav-links"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {links.map((link, i) => {
                            return (
                                <Nav.Link key={i} href={`action#${i}`}>{link}</Nav.Link>
                            )
                        })}

                    </Nav>
                    <Form className="d-flex end-form">
                        <h3>Call Us: <span>+10 (78) 378 3784</span></h3>
                        <Button className='btn-0'>Let's Talk</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;