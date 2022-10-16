import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../components/PageHeader';
import services1 from '../images/services1.svg'
import services2 from '../images/services2.svg'
import services3 from '../images/services3.svg'
import services4 from '../images/services4.png'

function Services() {
    const services = [
        {
            title: 'Discover, Explore the Product',
            image: services1,
            paragraph: 'Effective strategies to help you reach customers.'
        },
        {
            title: 'Discover, Explore the Product',
            image: services2,
            paragraph: 'Effective strategies to help you reach customers.'
        },
        {
            title: 'Discover, Explore the Product',
            image: services3,
            paragraph: 'Effective strategies to help you reach customers.'
        },
        {
            title: 'Discover, Explore the Product',
            image: services4,
            paragraph: 'Effective strategies to help you reach customers.'
        }
    ]
    return (
        <section id="services" className='mb-6'>
            <Container>
                <PageHeader subtitle={'Our Services'} title={'Provide Awesome Service With Our Tools'} />
                <Row>
                    {services.map((item, i) => {
                        return (
                            <Col key={i} sm={6} md={4} lg={3} className={`item item-${i}`}>
                                <div className="item-content">
                                    <h1>{item.title}</h1>
                                    <div className="img-container">
                                        <img src={item.image} alt="Service" />
                                    </div>
                                    <p>{item.paragraph}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Services
