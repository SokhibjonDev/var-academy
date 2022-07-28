import "./aboutUs.css";

function aboutUs(props) {
  return (
    <div className="aboutUs">
      <div className="Cards">
        <div className="card">
          <div className="cardImg">
            <img width={50} src={props.img} alt="asd" />
          </div>
          <div className="cardInfo">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <button>{props.btn}</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default aboutUs;
