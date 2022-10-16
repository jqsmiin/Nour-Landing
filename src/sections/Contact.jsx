import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col md={12} className='item-1'>
                        <div className="text-content">
                            <h2>Interested To Digging Dipper?</h2>
                            <p>We're out to create purposeful spaces that balance art and creativity with science and strategy.</p>
                            <button className='btn-1'>Contact Us</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
