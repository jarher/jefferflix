import styled from "styled-components";

const Card = styled.div`
    padding: 2%;
    box-sizing: border-box;
`;
const Videocard = ({imgUrl, alt}) => {
    return <Card>
        <img src={imgUrl} alt={alt} />
    </Card>
}

export default Videocard;