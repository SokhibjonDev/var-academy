import "./Contact.css";

function Contact() {
  return (
    <div class="Contact">
      <h1>Contact</h1>
      <div className="input">
        <input placeholder="Ism" type="text" />
        <input placeholder="Email" type="email" />
      </div>
      <div className="textarea">
        <textarea
          placeholder="Sharh"
          name="text"
          id="text"
          cols="30"
          rows="15"
        ></textarea>
      </div>
      <button>Yuborish</button>
    </div>
  );
}
export default Contact;
