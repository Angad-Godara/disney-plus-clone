import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='./images/slider-badging.jpg'>
                    </img>
            </Wrap>
            <Wrap>
                <img src='./images/slider-badag.jpg'>
                    </img>
            </Wrap>
            <Wrap>
                <img src='./images/slider-scale.jpg'>
                    </img>
            </Wrap>
            <Wrap>
                <img src='./images/slider-scales.jpg'>
                    </img>
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

// because I can easily style it myself
const Carousel = styled(Slider)`
    margin-top: 20px;

    .slick-list {
        overflow: visible;
    }

    ul li button:before{
        font-size: 10px;
        color: rgb(150, 158, 171);
        // for desiging the lower buttons(dot like)--> the inactive ones
    } 

    li.slick-active button::before{
        color: white; // for making the active poster (lower dots) buttons like which color the active one will show
    }

    button {
        z-index: 1; //for showing up the left button
    }

`

const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 500ms;

        &:hover{
            border: 4px solid rgb(249, 240, 249, 0.8);
        }
    }
`