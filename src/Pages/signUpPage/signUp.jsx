import React from "react";
import "./signUp.css";

function SignUp() {
  return (
    <>
      <div className="container">
        <form action="">
          <div className="imgInput">
            <img src="/images/MODERN-OFFICE-DESIGN.jpg" alt="" />
          </div>
          <div className="infoInput">
            <div className="name">
              <input type="text" placeholder="Ism" required />
              <input type="text" placeholder="Familya"  required/>
            </div>
            <div className="name">
              <input type="number" placeholder="Tel. nomer" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="name">
              <select name="course" id="course" required>
                <option value="#!">Kurslarimiz</option>
                <option value="#!">Web Dizayn</option>
                <option value="#!">Web dasturlash</option>
                <option value="#!">Web dasturlash</option>
              </select>
            </div>
            <div className="password">
              <input type="password" placeholder="Parol" required />
              <input type="password" placeholder="Parolni tasdiqlang"  required/>
            </div>
            <div className="name">
              <input className="submit" type="submit" value={"Jo`natish"} />
              <input className="submit" type="reset" value={"Qaytatdan"} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;