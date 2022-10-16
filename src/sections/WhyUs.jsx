import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from '../components/PageHeader';
import Carousel from '../components/Carousel';
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'

function WhyUs() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const data = [
        {
            id: 1,
            img: brand1,
        },
        {
            id: 2,
            img: brand2,
        },
        {
            id: 3,
            img: brand3,
        },
        {
            id: 4,
            img: brand4,
        }, {
            id: 5,
            img: brand1,
        }
    ]
    return (
        <section id="why-us" className='mb-6'>
            <Container>
                <Row className='items'>
                    <Col md={6} className='item-1'>
                        <PageHeader subtitle={'Why Choose Us'} title={'We are an SEO company that specializes in developing'} />
                    </Col>
                    <Col md={6} className='item-2'>
                        <button className='btn-1'>Explore More</button>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={6} className='item-3'>
                        <div className="completed-projects">
                            <div className="projects project-1">
                                <h3>450 +</h3>
                                <p>Successfully completed projects</p>
                            </div>
                            <div className="projects">
                                <h3>860</h3>
                                <p>Highly specialised employees</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className='item-4'>
                        <p>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We're out to create purposeful spaces that balance art and creativity with science and strategy.
                        </p>
                        <p>
                            - Shonda Leer, Chief of Staff at Franclin Technologies
                        </p>
                    </Col>
                </Row>
                <Row className='items-2 mt-5'>
                    <Carousel settings={settings} data={data} />
                </Row>
            </Container>
        </section>
    )
}

export default WhyUs
