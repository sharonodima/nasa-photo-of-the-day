import React from "react";
import styled from "styled-components"


const StyledNasaPhoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

const StyledImg = styled.img`
    max-width: 50%;
    object-fit: cover;
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
`

const StyledP = styled.p`
    width: 50%;
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
    `
const StyledH3 = styled.h3`
    transition: all 1s;
    &:hover {
        transform: scale(1.1);
    }
    font-family: 'Fruktur', cursive;
 	font-size: 3em;
 	border-bottom: 2px solid pink;
 	border-right: 2px solid pink;
 	border-left: 2px solid pink;
 	text-align: center;
 	box-shadow: 4px 4px 5px #888888;
    text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
`



const NasaPhoto = (props) => {
    return (
        <StyledNasaPhoto className = "nasa-photo-wrapper">
            <StyledH3>{props.photo.title}</StyledH3>
            <StyledP>{props.photo.date}</StyledP>
            <StyledImg src = {props.photo.hdurl}></StyledImg>
            <StyledP>{props.photo.explanation}</StyledP>
        </StyledNasaPhoto>
    )
}

export default NasaPhoto;