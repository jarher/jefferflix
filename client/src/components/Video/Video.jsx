import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { body_big, color_gray_lighter } from "../UI/variables.js";
import ButtonStyle from "../Button/Button.jsx";

const VideoContainer = styled.div`
  position: relative;
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

const VideoPlayer = styled.video`
    
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
const Video = () => {
  return (
    <>
      <VideoContainer>
        <VideoLayer>
          <ButtonPlayer>
            <BsFillPlayFill />
          </ButtonPlayer>
        </VideoLayer>
        <VideoPlayer poster="/img/video-poster.png" />
      </VideoContainer>
    </>
  );
    
}



export default Video;
