import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { body_big, body_medium, color_gray_lighter } from "../UI/variables.js";
import ButtonStyle from "../Button/Button.jsx";

const VideoContainer = styled.div`
  position: relative;
  @media (min-width: 768px) {
    height: 70vh;
    overflow: hidden;
  }
`;

const VideoLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoPlayer = styled.iframe`
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const ButtonPlayer = styled(ButtonStyle)`
  width: 30%;
  background-color: ${color_gray_lighter};
  font-size: ${body_big};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const VideoDescription = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-size: ${body_medium};
    color: ${color_gray_lighter};
  }
`;

const Video = (props) => {
  // const { desc, videoLink, videoImg } = props.video;
  
  // function getVideoUrl(videoLink){
  //   if(videoLink.includes("youtube")){
  //     const urlString = videoLink.split("/");
  //   }
  // }
  return (
    <>
      <VideoContainer>
        {/* <VideoLayer>
          <VideoDescription>{desc}</VideoDescription>
          <ButtonPlayer>
            <BsFillPlayFill />
          </ButtonPlayer>
        </VideoLayer> */}
        {/* <VideoPlayer
          src=""
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></VideoPlayer> */}
      
        {/* <iframe
          src="https://player.vimeo.com/video/801818003?h=62e9403baf"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      
        {/* registrado el link, verificar si es de youtube, elegit sólo el id del
        video luego concatene https://www.youtube.com/embed/ con el id. */}
      </VideoContainer>
    </>
  );
};

export default Video;
