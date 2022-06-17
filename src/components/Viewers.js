import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png'/>
            <video autoPlay loop muted>
                <source src='/videos/1564674844-disney.mp4' type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png'/>
            <video autoPlay loop muted>
                <source src='/videos/1564676714-pixar.mp4' type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png'/>
            <video autoPlay loop muted>
                <source src='/videos/1564676115-marvel.mp4' type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png'/>
            <video autoPlay loop muted>
                <source src='/videos/1608229455-star-wars.mp4' type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png'/>
            <video autoPlay loop muted>
                <source src='/videos/1564676296-national-geographic.mp4' type="video/mp4"/>
            </video>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px; // top right bottom 
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    // overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video{
        width: 0;
        height: 0;
        object-fit: cover;
    }

    // wrap:hover === &:hover
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        img{
            width: 0;
            height: 0;
            object-fit: cover;
        }
    }
`