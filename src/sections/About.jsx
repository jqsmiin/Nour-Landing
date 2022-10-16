import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../images/about1.png'
import PageHeader from '../components/PageHeader';

function About() {
    const data = [
        {
            id: 1,
            subtitle: 'About us',
            title: 'We Create a Steps to Build a Successful Digital Product',
            firstParagraph: "With over 50 years of combined experience, our mission is to design with your values and vision in mind. We're out to create purposeful spaces that balance art and creativity with science and strategy.",
            secondParahraph: "We're out to create purposeful spaces that balance art and creativity with science and strategy."
        }
    ]
    return (
        <section id="about" className='mb-6'>
            <Container>
                <Row>
                    <Col md={6} className='item-1'>
                        <img src={about} alt="About Us" />
                    </Col>
                    <Col md={6} className='item-2'>
                        {data.map(item => {
                            return (
                                <div key={item.id} className="text">
                                    <PageHeader subtitle={item.subtitle} title={item.title} />
                                    <p className='first'>{item.firstParagraph}</p>
                                    <p className='second'>{item.secondParahraph}</p>
                                    <button className='btn-1'>Explore More</button>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
