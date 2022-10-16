import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CarouselBrand from '../components/Carousel';
import user from '../images/t-woner.png'

function Testimonial() {
    const data = [
        {
            id: 1,
            img: user,
            text: '"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation',
            founder: '- Sara Smith. Creative Director'
        },
        {
            id: 2,
            img: user,
            text: '"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation',
            founder: '- Sara Smith. Creative Director'
        },
        {
            id: 3,
            img: user,
            text: '"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation',
            founder: '- Sara Smith. Creative Director'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
    return (
        <section id="testimonials" className='mb-6'>
            <Container>
                <Row>
                    <CarouselBrand settings={settings} data={data} />
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial
