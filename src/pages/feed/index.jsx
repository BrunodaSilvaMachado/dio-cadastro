import React from 'react'
import imgReact from '../../assets/logo192.png';
import imgOctocat from '../../assets/github.png';
import imgCuteBg from '../../assets/banner.png';

import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const imgPablo = "https://avatars.githubusercontent.com/u/45184516?v=4";
const imgSvgBg =
  "data:image/jpeg;base64,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";

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card imgUser={imgPablo} imgBackground={imgSvgBg}/>
                <Card imgUser={imgOctocat} imgBackground={imgCuteBg}/>
                <Card imgUser={imgReact} imgBackground={imgCuteBg}/>
                <Card imgUser={imgOctocat} imgBackground={imgSvgBg}/>
                <Card imgUser={imgPablo} imgBackground={imgSvgBg}/>
                <Card imgUser={imgOctocat} imgBackground={imgCuteBg}/>
                <Card imgUser={imgReact} imgBackground={imgCuteBg}/>
                <Card imgUser={imgOctocat} imgBackground={imgSvgBg}/>
                <Card imgUser={imgReact} imgBackground={imgCuteBg}/>
                <Card imgUser={imgOctocat} imgBackground={imgSvgBg}/>
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING TOP 5 DA SEMANA </TitleHighlight>
                <UserInfo nome="Octocat" image={imgOctocat} percentual={25}/>
                <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={65}/>
                <UserInfo nome="React fan" image={imgReact} percentual={45}/>
                <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
