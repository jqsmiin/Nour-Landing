import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
        <section id="hero-section">
            <Container>
                <Row className='items'>
                    <Col className='item-1' md={6}>
                        <h3>Digital Marketing Expert</h3>
                        <h1>We bring you new customers</h1>
                        <p>We build effective strategies to help you reach customers and prospects across the entire web.</p>
                        <Button className='btn-0'>Explore Services</Button>
                    </Col>
                    <Col className='item-2' md={6}>
                        <span><i className="bi bi-play"></i></span>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Hero
