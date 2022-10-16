import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.webp'


function Footer() {
    const data = [
        {
            id: 1,
            title: 'Navigation',
            list: ['Home', 'About', 'Services', 'Blog', 'Contact']
        },
        {
            id: 2,
            title: 'Services',
            list: ['Drone Mapping', 'Real State', 'Commercial', 'Construction']
        },
        {
            id: 3,
            title: 'Support',
            list: ['Drone Mapping', 'Real State', 'Commercial', 'Construction']
        },
        {
            id: 4,
            title: 'Contact Us',
            list: ['Drone Mapping', 'contactus@gmail.com', '+10 (78) 378 3784']
        }
    ]
    return (
        <section id="footer">
            <Container>
                <Row className='items'>
                    <Col md={3} lg={3} className='item-0'>
                        <img src={logo} alt='footer-logo' />
                        <p>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
                        <ul>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                            <li><i className="bi bi-youtube"></i></li>
                        </ul>
                    </Col>
                    {data.map(item => {
                        return (
                            <Col key={item.id} className={`item item-${item.id}`} lg={2} md={3}>
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.list.map((list, i) => {
                                        return (
                                            <li key={i}>{list}</li>
                                        )
                                    })}
                                </ul>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Footer
