import "./banner.css";

const Banner = ({classValue})=> {
    return (
      <div className={classValue}>
        <img src="./img/jefferflix-logo.png" alt="jefferflix logo" />
      </div>
    );
}
export default Banner;