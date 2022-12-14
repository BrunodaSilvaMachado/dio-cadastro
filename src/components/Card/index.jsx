import { FiThumbsUp } from "react-icons/fi";
import React from "react";
import imgReact from "../../assets/logo-dio.png";
import imgOctocat from "../../assets/logo-dio.png";

import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";

const Card = ({imgUser, imgBackground, textPostInfo}) => {
  return (
    <CardContainer>
      <ImageBackground src={imgBackground} />
      <Content>
        <UserInfo>
          <UserPicture src= {imgUser}/>
          <div>
            <h4>Pablo Henrique</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />
            10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
