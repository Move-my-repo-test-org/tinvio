import React from 'react';
import arrow from '../assets/icons/arrow.png';
import sliderImg from '../assets/images/slider-image-orders.png';
import '../css/slider.css';

function Slider() {

    const [slideNum, setSlideNum] = React.useState(1);

    const firstSlideText = React.useRef(null);
    const secondSlideText = React.useRef(null);
    const thirdSlideText = React.useRef(null);
    const firstSlideImg = React.useRef(null);
    const secondSlideImg = React.useRef(null);
    const thirdSlideImg = React.useRef(null);

    const goToNextSlide = () => {
        if (slideNum === 1) {
            leftOut(firstSlideText.current);
            rightIn(secondSlideText.current);
            leftOut(firstSlideImg.current);
            rightIn(secondSlideImg.current);
        } else {
            leftOut(secondSlideText.current);
            leftOut(secondSlideImg.current);
            rightIn(thirdSlideText.current);
            rightIn(thirdSlideImg.current);
        }
        setSlideNum(slideNum+1);
    }

    const leftOut = (currentNode) => {
        currentNode.classList.add('left-out');
        currentNode.addEventListener('animationend', function() {
            this.classList.remove('left-out');
            this.classList.remove('active');
        })
    }

    const rightIn = (nextNode) => {
        nextNode.classList.add('right-in');
        nextNode.classList.add('current');
        nextNode.addEventListener('animationend', function() { 
          this.classList.remove('right-in');
          this.classList.remove('current');
          this.classList.add('active');
        }); 
    }

    const goToPrevSlide = () => {
        if (slideNum === 2) {
            rightOut(secondSlideText.current)
            leftIn(firstSlideText.current)
            rightOut(secondSlideImg.current)
            leftIn(firstSlideImg.current)
        } else {
            rightOut(thirdSlideText.current)
            leftIn(secondSlideText.current)
            rightOut(thirdSlideImg.current)
            leftIn(secondSlideImg.current)
        }
        setSlideNum(slideNum-1)
    }

    const rightOut = (currentNode) => {
        currentNode.classList.add('right-out');
        currentNode.addEventListener('animationend', function() {
            this.classList.remove('right-out');
            this.classList.remove('active');
        })
    }

    const leftIn = (prevNode) => {
        prevNode.classList.add('left-in');
        prevNode.classList.add('current');
        prevNode.addEventListener('animationend', function() { 
          this.classList.remove('left-in');
          this.classList.remove('current');
          this.classList.add('active');
        }); 
    }

    

    return (
        <div className="slider">
            <div className="container">
                <div className="slider-text-block">
                    <div className="slider-text-wrapper">
                        <div ref={firstSlideText} className="slider-text-content active">
                            <h2 className="section-header slider-header">All your orders in one place</h2>
                            <p className="section-text slider-text">Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform</p>
                        </div>
                        <div ref={secondSlideText} className="slider-text-content">
                            <h2 className="section-header slider-header">All your orders in one place</h2>
                            <p className="section-text slider-text">Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform</p>
                        </div>
                        <div ref={thirdSlideText} className="slider-text-content">
                            <h2 className="section-header slider-header">All your orders in one place</h2>
                            <p className="section-text slider-text">Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform</p>
                        </div>
                    </div>
                    <div className="slider-controls">
                        <div className={slideNum === 1 ? "left-arrow-btn arrow-btn" : "left-arrow-btn arrow-btn active"} onClick={slideNum !== 1 ? goToPrevSlide : null}>
                            <img className="left-arrow slider-arrow" src={ arrow } alt="left arrow" />
                        </div>
                        <div className="pagination">
                            <div className={slideNum === 1 ? "slider-dot active" : "slider-dot"}></div>
                            <div className={slideNum === 2 ? "second-dot slider-dot active" : "second-dot slider-dot"}></div>
                            <div className={slideNum === 3 ? "slider-dot active" : "slider-dot"}></div>
                        </div>
                        <div className={slideNum === 3 ? "right-arrow-btn arrow-btn" : "right-arrow-btn arrow-btn active"} onClick={slideNum !== 3 ? goToNextSlide : null}>
                            <img className="right-arrow slider-arrow" src={ arrow } alt="right arrow" />
                        </div>
                    </div>
                </div>
                <div className="slider-img-block">
                    <img ref={firstSlideImg} className="slider-img active" src={ sliderImg } alt="screenshot of orders page" />
                    <img ref={secondSlideImg} className="slider-img" src={ sliderImg } alt="screenshot of orders page" />
                    <img ref={thirdSlideImg} className="slider-img" src={ sliderImg } alt="screenshot of orders page" />
                </div>
            </div>
        </div>
    )
}

export default Slider;

// {slideNum === 1 ? "slider-img active" : "slider-img"}