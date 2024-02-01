// components/Hello.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Modal } from 'react-bootstrap';

const Hello = () => {
  const [showSlider, setShowSlider] = useState(false);

  const handleButtonClick = () => {
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Button variant="primary" onClick={handleButtonClick}>
        Open Slick Slider
      </Button>

      <Modal show={showSlider} onHide={handleCloseSlider} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Slick Slider Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slider {...settings}>
            <div>
              <img
                src="https://via.placeholder.com/800x400"
                alt="First slide"
                style={{ width: '100%' }}
              />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSlider}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Hello;
