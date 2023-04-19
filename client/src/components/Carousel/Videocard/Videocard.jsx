import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { body_small, color_gray_300 } from "../../UI/variables.js";

const Card = styled.div`
  padding: 2%;
  box-sizing: border-box;
`;
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color_gray_300};
  font-size: ${body_small};
  margin-top: 5%;
  
`;

const CardImg = styled.img`
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 5px;
`;


const CreationDate = styled.span`
`;

const Videocard = ({ imgUrl, alt, border }) => {
  return (
    <Card>
      <CardImg src={imgUrl} alt={alt} borderColor={border}/>
      <CardInfo>
        <div>
          Fecha de creación <CreationDate>11/11/2011</CreationDate>
        </div>
        <RiDeleteBin6Line />
      </CardInfo>
    </Card>
  );
};

export default Videocard;
