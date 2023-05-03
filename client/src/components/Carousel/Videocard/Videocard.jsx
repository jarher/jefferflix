import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  body_normal,
  body_small,
  body_smaller,
  color_gray_300,
  color_gray_lighter,
} from "../../UI/variables.js";
import { useContext } from "react";
import { DataContext } from "../../../Context/DataContext.js";

const Card = styled.div`
  padding: 0 2% 2%;
  box-sizing: border-box;
  @media (min-width: 425px) {
    padding: 1% 2%;
  }
`;
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color_gray_300};
  font-size: ${body_smaller};
  margin-top: 5%;
`;
const CardImg = styled.img`
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 5px;
`;
const CardTextWrapper = styled.div`
padding-right: 2%;
`;
const CardTitle = styled.div`
color:${color_gray_lighter};
font-size:${body_small};
`;
const CreationWrapper = styled.div`
  margin-top: 2%;
`;
const CreationDate = styled.span``;

const DeleteButton = styled.span`
  font-size: ${body_normal};
`;

const Videocard = ({ title, imgUrl, alt, border, videoId }) => {
  const { set_videoID, set_Modal_Message } = useContext(DataContext);

  const delete_video = () => {
    set_Modal_Message(
      "¿Realmente desea eliminar el vídeo de la lista de reproducción?"
    );
    set_videoID(videoId);
  };

  
  return (
    <Card>
      <CardImg
        src={imgUrl}
        alt={alt}
        borderColor={border}
        onClick={() => set_videoID(videoId)}
      />
      <CardInfo>
        <CardTextWrapper>
          <CardTitle>{title}</CardTitle>
          <CreationWrapper>
            Fecha de creación <CreationDate>11/11/2011</CreationDate>
          </CreationWrapper>
        </CardTextWrapper>
        <DeleteButton onClick={delete_video}>
          <RiDeleteBin6Line />
        </DeleteButton>
      </CardInfo>
    </Card>
  );
};

export default Videocard;
