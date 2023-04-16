import styled from "styled-components";

const BannerStyle = styled.div`
  width: 200px;
  @media (min-width: 768px) {
    width: 247px;
  }
`;

const Banner = () => {
  return (
    <BannerStyle>
      <img src="/img/jefferflix-logo.png" alt="jefferflix logo" />
    </BannerStyle>
  );
};
export default Banner;
