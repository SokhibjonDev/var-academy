import "./coursePage.css";
function Course() {
  return (
    <div className="Course">
      <h1>Web Dasturlash</h1>
      <div className="courses">
        <div className="courseCard">
          <img src="../../images/html.png" alt="" />
        </div>
        <div className="courseCard">
          <h4>JS</h4>
        </div>
        <div className="courseCard asd">
          <h4>TS</h4>
        </div>
        <div className="courseCard asd">
          <i>jQuerry</i>
        </div>
        <div className="courseCard asd">
          <img src="../../images/css.png" alt="" />
        </div>
        <div className="courseCard asd">
          <img src="../../images/react.png" alt="" />
        </div>
      </div>
      <div className="courses">
        <div className="courseCard">
          <i>Angular</i>
        </div>
        <div className="courseCard">
          <h4>E X</h4>
        </div>
        <div className="courseCard asd">
          <img src="../../images/github.png" alt="" />
        </div>
        <div className="courseCard asd">
          <img src="../../images/mongo.png" alt="" />
        </div>
        <div className="courseCard asd">
          <img src="../../images/git.png" alt="" />
        </div>
        <div className="courseCard asd">
          <img src="../../images/mysql.png" alt="" />
        </div>
        <div className="courseCard asd">
          <h4 style={{fontSize: '24px'}}>Node JS</h4>
        </div>
        <div className="courseCard asd">
          <img src="../../images/front-end.png" alt="" />
        </div>
        <div className="courseCard asd">
          <img src="../../images/front-end.png" alt="" />
        </div>
      </div>
      <div className="courses">
        <div className="courseCard">
          <img className="revolver" src="../../images/java.png" alt="" />
        </div>
        <div className="courseCard">
          <img src="../../images/python.png" alt="" />
        </div>
        <div className="courseCard asd">
          <h4>C</h4>
        </div>
        <div className="courseCard asd">
          <h4>C++</h4>
        </div>
        <div className="courseCard asd">
          <h4>C#</h4>
        </div>
        <div className="courseCard asd">
          <h4 className="revolver" style={{fontStyle:'italic'}}>GO</h4>
        </div>
        <div className="courseCard asd">
          <h4 className="revolver" style={{fontStyle:'italic', borderRadius:'50%', border:'2px solid white', padding:'10px 10px 13px'}}>php</h4>
        </div>
        <div className="courseCard asd">
          {/* <img src="../../images/front-end.png" alt="" /> */}
        </div>
        <div className="courseCard asd">
          {/* <img src="../../images/front-end.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}
export default Course;
