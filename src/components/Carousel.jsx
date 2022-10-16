import Slider from "react-slick";


function CarouselBrand({ settings, data }) {

    if (data.length === 5) {
        return (
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map(item => {
                        return (
                            <div key={item.id}>
                                <img src={item.img} alt='Brand' />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    } else if (data.length === 4) {
        return (
            <div className="slider-blog-container">
                <Slider {...settings}>
                    {data.map(item => {
                        return (
                            <div className='item-container' key={item.id}>
                                <div className="item-content">
                                    <img src={item.img} alt='Blog Post' />
                                    <div className="text-content">
                                        <h4>{item.type}</h4>
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    } else if (data.length === 3) {
        return (
            <div className='slider-testimonial-container'>
                <Slider {...settings}>
                    {data.map(item => {
                        return (
                            <div key={item.id} className="testimonial-container">
                                <div className="testimonial-content">
                                    <img src={item.img} alt="User" />
                                    <p className="first">{item.text}</p>
                                    <p className="second">{item.founder}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }

}

export default CarouselBrand;