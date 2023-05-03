import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { body_big, body_medium, body_normal, color_black, color_gray_lighter } from "../UI/variables.js";
import ButtonStyle from "../Button/Button.jsx";
import { useState } from "react";
import { useEffect } from "react";
import getVideoUrl from "./getVideoUrl.js";

const VideoWrapper = styled.div`
  position: sticky;
  z-index:998;
  left: 0;
  right: 0;
  top:11vh;
  @media (min-width:1024px){
    position:relative
  }
`;

const VideoContainer = styled.div`
  position: relative;
  height: 30vh;
  background-color: ${color_black};
  @media (min-width: 425px) {
    height: 50vh;
    overflow: hidden;
    padding:1% 0;
  }
   @media (min-width: 425px) {
    height: 60vh;
   }
`;

const VideoLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-column: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const VideoPlayer = styled.iframe`
  width: 100%;
  height:100%;
  @media (min-width: 768px) {
    width:50%;
    margin:auto 25%;
  }
`;

const ButtonPlayer = styled(ButtonStyle)`
  width: 30%;
  background-color: ${color_gray_lighter};
  font-size: ${body_big};
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  @media (min-width: 768px) {
    grid-area: 2 / 3 / 3 / 4;
  }
`;

const VideoDescription = styled.div`
  display: none;
  align-self: center;
  justify-self: center;
  line-height: ${body_big};
  @media (min-width: 768px) {
    display: block;
    font-size: ${body_medium};
    color: ${color_gray_lighter};
    grid-area: 2 / 1 / 3 / 2;
    width: 300px;
  }
`;

const BackgroundImg = styled.div`
  background: url(${(props) => props.videoImg}) no-repeat top center / cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LayersWrapper = styled.div`
  opacity: ${(props) => (props.occultLayer ? 0 : 1)};
  transition: all 0.2s ease-in-out;
`;

const Video = (props) => {
  const { desc, videoLink, videoImg } = props.video;
  const [layer, setLayer] = useState(true);
  const [occultLayer, setOccultLayer] = useState(false);

  useEffect(() => {
    setLayer(true);
    setOccultLayer(false);
  }, [videoLink]);

  useEffect(() => {
    setTimeout(() => setLayer(false), 200);
  }, [occultLayer]);

  const handleLayerState = () => {
    setOccultLayer(true);
  };

  return (
    <VideoWrapper>
      <VideoContainer>
        {layer && (
          <LayersWrapper occultLayer={occultLayer}>
            <BackgroundImg videoImg={videoImg} />
            <VideoLayer>
              <VideoDescription>{desc}</VideoDescription>
              <ButtonPlayer onClick={handleLayerState}>
                <BsFillPlayFill />
              </ButtonPlayer>
            </VideoLayer>
          </LayersWrapper>
        )}

        <VideoPlayer
          src={getVideoUrl(videoLink)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></VideoPlayer>
      </VideoContainer>
    </VideoWrapper>
  );
};

export default Video;
