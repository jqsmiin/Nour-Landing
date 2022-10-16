import PageHeader from '../components/PageHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import stuffs1 from '../images/stuffs1.jpg'
import stuffs2 from '../images/stuffs2.jpg'
import stuffs3 from '../images/stuffs3.jpg'
import CarouselBrand from '../components/Carousel';

function Blog() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
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
    const data = [
        {
            id: 1,
            img: stuffs1,
            type: 'Marketing',
            title: 'Discover, Explore the product'
        },
        {
            id: 4,
            img: stuffs1,
            type: 'Marketing',
            title: 'Discover, Explore the product'
        },
        {
            id: 2,
            img: stuffs2,
            type: 'Marketing',
            title: 'Discover, Explore the product'
        },
        {
            id: 3,
            img: stuffs3,
            type: 'Marketing',
            title: 'Discover, Explore the product'
        }
    ]
    return (
        <section id="blog" className='mb-6'>
            <Container>
                <PageHeader subtitle={'Case Study'} title={'Some Of Our Awesome Stuffs'} />
                <Row>
                    <CarouselBrand settings={settings} data={data} />
                </Row>
            </Container>
        </section>
    )
}

export default Blog
