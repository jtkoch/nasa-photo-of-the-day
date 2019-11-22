import React from "react"; 
import styled from "styled-components";


const PhotoDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const TextContainer = styled.div`
  color: maroon;
  font-family: 'Odibee Sans', cursive;
`;

const PhotoTitle = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const PhotoImage = styled.img`
  border-radius: 5%; 
  width: 500px;
  height: 500px;
  margin: 20px;
`;

const PhotoExplanation = styled.p`
  width: 90%;
  text-align: center;
  margin: 50px;
  font-size: 20px;
`;  




const NasaPic = props => {
  return (
    <PhotoDiv className="NasaPic">
      <PhotoImage className="NasaImage" alt="Space" src={props.url}/>
        <TextContainer>
          <PhotoTitle>{props.title}</PhotoTitle>
          <PhotoExplanation>{props.explanation}</PhotoExplanation>
          <p>{props.date}</p>
        </TextContainer>
    </PhotoDiv>
  );
};  

export default NasaPic;