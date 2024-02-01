import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Helooo = () => {
    const settings = {
        // dots: true,
        arrow: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    initialSlide: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    const buttons = [
        <button key="1">All</button>,
        <button key="2">Equilities</button>,
        <button key="3">Thematic</button>,
        <button key="4">Cons</button>,
        <button key="5">Pubille</button>,
        <button key="6">Industry</button>,
        <button key="7">Bonds</button>,
    ];
    return (

        <Slider {...settings}>
            {buttons.map((button, index) => (
                <div key={index} className="card text-center py-2 button-slide">
                    {button}
                </div>
            ))}
        </Slider>

    )
}

export default Helooo