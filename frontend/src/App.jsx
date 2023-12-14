import video from './assets/webscraping.mp4'
import {Title, VideoContainer, Video, Container, DescriptionContainer, Subtitle} from "./AppStyled"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <div>
        <Title className="text-center col-12 fw-bold mt-5 mb-4">PROJETO WEBSCRAPING</Title>
        </div>
      <VideoContainer>
        <Video
          src={video}
          allowFullScreen
        ></Video>
      </VideoContainer>

        <DescriptionContainer>
          <Subtitle className="text-center col-12 fw-bold mt-5">DETALHES DO PROJETO</Subtitle>
            <p>Este programa como exemplo extrai dados do mercado livre de forma automática e dinâmica, podendo utilizar o conteúdo em outro projeto ou plataforma. Os dados são organizados e estruturados também de forma automática no formato de texto JSON.</p><br/>
            <p>O caso acima, por ser um vídeo rápido, registra apenas 10 produtos, porém, é possível registrar todos os produtos pesquisados, basta possuir o armazenamento necessário de dados.</p><br/>
            <p>Em suma, o Web scraping é uma técnica de extração de dados da web, no qual um programa automatizado navega por páginas da web, extrai informações relevantes e as organiza em um formato estruturado. </p>
        </DescriptionContainer>

    </Container>
    <Footer/>
    </>
  );
};

export default App;
