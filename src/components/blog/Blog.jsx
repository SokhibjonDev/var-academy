import "./Blog.css";

function Blog(props) {
  return (
    <div className="Blog">
      <div className="blogTitle">
        <div className="icon">
          <img src={props.img} alt="" />
        </div>
        <div className="catalog">
          <h2>{props.title}</h2>
          <p>
            {props.strong}
            <span>{props.lorem}</span>
          </p>
        </div>
      </div>
      
    </div>
  );
}
export default Blog;
